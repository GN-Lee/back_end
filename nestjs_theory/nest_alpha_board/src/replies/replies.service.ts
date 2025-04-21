import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Reply } from './entities/reply.entity';

@Injectable()
export class RepliesService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Reply) private replyRepository: Repository<Reply>,
  ) {}

  async create(createReplyDto: CreateReplyDto) {
    const { content, author, post: postId } = createReplyDto;
    const post = await this.replyRepository.findOne({
      where: { id: postId },
    });
    if (!post) return { success: false, message: '게시판을 찾을 수 없음' };

    const authorId = await this.replyRepository.findOne({
      where: { id: author },
    });
    if (!authorId)
      return { success: false, message: '유저의 아이디를 찾을 수 없음' };

    const newReply = await this.replyRepository.create({
      content,
      author: authorId,
      post: post,
    });
    await this.replyRepository.save(newReply);
    return '댓글을 작성하였습니다';
  }

  async findAll() {
    const allReplies = await this.replyRepository.find();
    return {
      success: true,
      message: '모든 댓글을 표기합니다.',
      data: allReplies,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}

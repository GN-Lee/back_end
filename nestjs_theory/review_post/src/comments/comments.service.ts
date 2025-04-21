import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRespository: Repository<Comment>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const user = await this.userRepository.findOne({
      where: { id: createCommentDto.author },
    });
    if (!user) return { success: false, message: '유저를 찾을 수 없습니다.' };
    const { content } = createCommentDto;
    this.commentRespository.create({ content, author: user });
    return '댓글 등록이 완료되었습니다.';
  }

  async findAll() {
    const allComments = await this.commentRespository.find();
    return {
      success: true,
      message: '모든 댓글을 불러옵니다.',
      data: allComments,
    };
  }

  async findOne(id: number) {
    const findComment = await this.commentRespository.findOne({
      where: { id },
    });
    return {
      success: true,
      message: `${id}번 댓글을 불러옵니다.`,
      data: findComment,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}

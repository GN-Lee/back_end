import { Module } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { RepliesController } from './replies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Reply } from './entities/reply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, Reply])],
  controllers: [RepliesController],
  providers: [RepliesService],
})
export class RepliesModule {}

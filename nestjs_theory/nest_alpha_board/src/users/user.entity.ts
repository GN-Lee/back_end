import { Post } from 'src/posts/entities/post.entity';
import { Reply } from 'src/replies/entities/reply.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nickname: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @OneToMany(() => Reply, (replies) => replies.author)
  replies: User;
}

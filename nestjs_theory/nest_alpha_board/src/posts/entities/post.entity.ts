import { Reply } from 'src/replies/entities/reply.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  title: string;
  @Column({ type: 'text' })
  contents: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  //n:1(게시판:사람)
  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  //1:n(게시판:댓글)
  @OneToMany(() => Reply, (reply) => reply.post)
  replies: Reply[];
}

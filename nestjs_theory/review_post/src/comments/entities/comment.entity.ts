import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  content: string;

  @CreateDateColumn({ type: 'timestamp', name: '답글 생성일' })
  date: Date;

  @ManyToOne(() => User, (user) => user.comments)
  author: User;
}

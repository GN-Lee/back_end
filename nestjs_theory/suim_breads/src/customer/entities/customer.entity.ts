import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 20 })
  name: string;
  @Column({ type: 'varchar' })
  rank: string;
}

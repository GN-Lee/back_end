import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'varchar' })
  rank: string;
  @Column({ type: 'int' })
  age: number;
}

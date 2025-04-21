import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bread {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 20 })
  name: string;
  @Column({ type: 'int' })
  price: number;
}

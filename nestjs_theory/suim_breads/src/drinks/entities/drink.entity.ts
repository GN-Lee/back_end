import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drink {
  @PrimaryGeneratedColumn()
  id: number;
}

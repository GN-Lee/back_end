import { Column, Entity } from 'typeorm';

@Entity('Product')
export class Product {
  @Column({ type: 'int', primary: true })
  id: number;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'int' })
  price: number;
}

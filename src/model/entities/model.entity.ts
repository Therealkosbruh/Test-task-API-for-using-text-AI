import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: 100 })
  tokens_per_request: number;

  @Column({ default: 20 })
  price_per_100_tokens: number;
}
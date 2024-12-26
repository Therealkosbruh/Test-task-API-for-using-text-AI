// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity()
// export class Model {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ unique: true })
//   name: string;

//   @Column({ default: 100 })
//   tokens_per_request: number;

//   @Column({ default: 20 })
//   price_per_100_tokens: number;
// }

// src/models/entities/model.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('models')
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ name: 'api_key' })
  apiKey: string;

  @Column({ name: 'model_type' })
  modelType: string;

  @Column({ name: 'tokens_per_request', default: 100 })
  tokensPerRequest: number;

  @Column({ name: 'price_per_100_tokens', default: 20 })
  pricePer100Tokens: number;
}

import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { Balance } from 'src/balance/entities/balance.entity';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ default: 'client' })
    role: string;
  
    // @OneToOne(() => Balance)
    // @JoinColumn()
    // balance: Balance;
    
}

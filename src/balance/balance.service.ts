import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Balance } from './entities/balance.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
  ) {}

  async getBalance(userId: number): Promise<number> {
    const balance = await this.balanceRepository.findOne({ where: { user: { id: userId } } });
    if (!balance) {
      throw new BadRequestException('Balance not found');
    }
    return balance.balance;
  }

  async updateBalance(userId: number, amount: number): Promise<number> {
    const balance = await this.balanceRepository.findOne({ where: { user: { id: userId } } });
    if (!balance) {
      throw new BadRequestException('Balance not found');
    }
    balance.balance += amount;
    await this.balanceRepository.save(balance);
    return balance.balance;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueEmail implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { email } });
    return !user; 
  }

  defaultMessage(args: ValidationArguments): string {
    return 'This email has already taken, please try to put another one'; 
  }
}

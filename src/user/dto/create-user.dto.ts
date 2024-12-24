// src/user/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, MinLength, Matches, Validate } from 'class-validator';
import { IsUniqueEmail } from '../validators/is-unique-email.validator'; 

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @Validate(IsUniqueEmail) 
  email: string;

  @IsString()
  @MinLength(8, { message: 'Пароль должен содержать как минимум 8 символов' })
  @Matches(/[a-z]/, { message: 'Пароль должен содержать хотя бы одну строчную букву' })
  @Matches(/[A-Z]/, { message: 'Пароль должен содержать хотя бы одну заглавную букву' })
  @Matches(/[\W_]/, { message: 'Пароль должен содержать хотя бы один спецсимвол' })
  @IsNotEmpty()
  password: string;
}

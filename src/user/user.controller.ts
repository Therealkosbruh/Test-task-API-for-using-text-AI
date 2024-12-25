// import { Controller, Post, Body } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { AuthService } from './auth/auth.service';

// @Controller('user')
// export class UserController {
//   constructor(
//     private readonly userService: UserService,
//     private readonly authService: AuthService, 
//   ) {}

//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto) {
//     const user = await this.userService.create(createUserDto);
//     const token = await this.authService.login(user); 
//     return { user, token };
//   }
// }

// import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { AuthService } from './auth/auth.service';
// import { ValidationError, validate } from 'class-validator';

// @Controller('user')
// export class UserController {
//   constructor(
//     private readonly userService: UserService,
//     private readonly authService: AuthService, 
//   ) {}

//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto) {
//     const errors = await validate(createUserDto);
//     if (errors.length > 0) {
//       const errorMessages = errors.map(err => {
//         // Получаем каждое сообщение ошибки
//         return Object.values(err.constraints).join(', ');
//       });
//       throw new BadRequestException(errorMessages.join(', ')); 
//     }
    
//     const user = await this.userService.create(createUserDto);
//     const token = await this.authService.login(user); 
//     return { user, token };
//   }
// }



import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService, 
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    const token = await this.authService.login(user); 
    return { user, token };
  }
}

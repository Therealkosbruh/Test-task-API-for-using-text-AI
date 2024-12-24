import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ModelModule } from './model/model.module';
import { BalanceModule } from './balance/balance.module';
import * as dotenv from 'dotenv';
import { User } from './user/entities/user.entity';
import { Balance } from './balance/entities/balance.entity';
import { Model } from './model/entities/model.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.TYPEORM_HOST, 
      port: parseInt(process.env.TYPEORM_PORT), 
      username: process.env.TYPEORM_USERNAME, // Имя пользователя
      password: process.env.TYPEORM_PASSWORD, // Пароль
      database: process.env.TYPEORM_DATABASE, // Имя базы данных
      entities: [User, Balance, Model], // Ваши сущности
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true', // Автосинхронизация
      logging: process.env.TYPEORM_LOGGING === 'true', // Логирование запросов
      migrations: [process.env.TYPEORM_MIGRATIONS], // Путь к миграциям
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME, // Таблица миграций
      migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true', // Запуск миграций при старте
    }),
    UserModule,
    ModelModule,
    BalanceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

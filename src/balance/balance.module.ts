// import { Module } from '@nestjs/common';
// import { BalanceService } from './balance.service';
// import { BalanceController } from './balance.controller';

// @Module({
//   controllers: [BalanceController],
//   providers: [BalanceService],
// })
// export class BalanceModule {}

// balance.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { Balance } from './entities/balance.entity'; // Импорт сущности

@Module({
  imports: [TypeOrmModule.forFeature([Balance])], // Используйте сущность Balance
  providers: [BalanceService],
  controllers: [BalanceController],
  exports: [BalanceService], // Экспортируйте сервис, если он нужен в других модулях
})
export class BalanceModule {}

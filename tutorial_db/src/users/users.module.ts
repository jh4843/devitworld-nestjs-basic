import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerModule } from '../core/logger/logger.module';

// Database
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), LoggerModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

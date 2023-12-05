import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

// Database
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LoggerModule } from './core/logger/logger.module';

import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.development.env'] }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [User],
      synchronize: true,
      logging: true,
    }),

    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { LoggerModule } from './core/logger/logger.module';
import { UsersModule } from './users/users.module';
//import { UsersController } from './users/users.controller';

// middlewares
//import { LoggerMiddleware } from './core/middlewares/logger.middleware';
//import { logger } from './core/middlewares/logger.middleware';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
//export class AppModule implements NestModule {
export class AppModule {
  //configure(consumer: MiddlewareConsumer) {
  //consumer.apply(LoggerMiddleware).forRoutes('users');
  // Functional middleware
  //consumer.apply(logger).forRoutes(UsersController);
  //}
}

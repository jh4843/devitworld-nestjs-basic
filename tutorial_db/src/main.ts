import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AllExceptionFilter } from './core/filters/exception.filter';
import { LoggerService } from './core/logger/logger.service';
import { LoggingInterceptor } from './core/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));

  app.useLogger(app.get(LoggerService));

  await app.listen(3000);
}
bootstrap();

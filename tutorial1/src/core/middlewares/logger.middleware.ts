import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(
      `(Middleware) Incoming Request on ${req.path}`,
      `method=${req.method}`,
    );
    next();
  }
}

// Functional middleware
//
// import { Request, Response, NextFunction } from 'express';

// export function logger(req: Request, res: Response, next: NextFunction) {
//   console.log(`(Middleware) Log: Request...`);
//   next();
// }

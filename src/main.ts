import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const instance = winston.createLogger({
    // options of Winston
    level: "debug",
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [new winston.transports.Console()],
  });
  const app = await NestFactory.create(AppModule,{
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  ); 
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();

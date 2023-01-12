import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { HttpHeaderMiddleware } from '../http.header.middleware';

@Module({
  controllers: [BrandController],
  providers: [BrandService, Logger]
})
export class BrandModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpHeaderMiddleware)
      .forRoutes(BrandController);
  }
}

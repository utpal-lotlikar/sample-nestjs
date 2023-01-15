import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [BrandModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}

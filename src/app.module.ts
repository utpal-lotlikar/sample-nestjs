import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BrandModule, CategoryModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/sample-test-jest')],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}

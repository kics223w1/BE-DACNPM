import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [],
  controllers: [ProductController],
})
export class AppModule {}

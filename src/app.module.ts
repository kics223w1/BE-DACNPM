import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';

@Module({
  imports: [],
  controllers: [ProductController, ReviewController],
})
export class AppModule {}

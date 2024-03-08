import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';
import { DiscountProductController } from './controllers/discount-product.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [
    ProductController,
    ReviewController,
    DiscountProductController,
    UserController,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';
import { DiscountProductController } from './controllers/discount-product.controller';
import { UserController } from './controllers/user.controller';
import { BillController } from './controllers/bill.controller';

@Module({
  imports: [],
  controllers: [
    ProductController,
    ReviewController,
    DiscountProductController,
    UserController,
    BillController,
  ],
})
export class AppModule {}

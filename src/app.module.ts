import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';
import { DiscountProductController } from './controllers/discount-product.controller';
import { UserController } from './controllers/user.controller';
import { BillController } from './controllers/bill.controller';
import { AuthenticationController } from './controllers/authentication.controller';
import { ProcessingBillController } from './controllers/processing-bill.controller';
import { UserInformationController } from './controllers/user-info.controller';
import { PaymentInformationController } from './controllers/payment-info.controller';

@Module({
  imports: [],
  controllers: [
    ProductController,
    ReviewController,
    DiscountProductController,
    UserController,
    BillController,
    AuthenticationController,
    ProcessingBillController,
    UserInformationController,
    PaymentInformationController,
  ],
})
export class AppModule {}

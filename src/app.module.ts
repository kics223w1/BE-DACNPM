import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ReviewController } from './controllers/review.controller';
import { UserController } from './controllers/user.controller';
import { BillController } from './controllers/bill.controller';
import { AuthenticationController } from './controllers/authentication.controller';
import { UserInformationController } from './controllers/user-info.controller';
import { PaymentInformationController } from './controllers/payment-info.controller';

@Module({
  imports: [],
  controllers: [
    ProductController,
    ReviewController,
    UserController,
    BillController,
    AuthenticationController,
    UserInformationController,
    PaymentInformationController,
  ],
})
export class AppModule {}

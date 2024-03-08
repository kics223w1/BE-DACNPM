import { Controller, Get } from '@nestjs/common';
import { Discount_Product } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('discount-products')
export class DiscountProductController {
  constructor() {}

  @Get()
  async getHello(): Promise<Discount_Product[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.DISCOUNT_PRODUCT)
      .select('*');

    if (response.error) {
      return [];
    }
    const discountProducts = response.data as Discount_Product[];
    return discountProducts;
  }
}

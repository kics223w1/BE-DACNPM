import { Controller, Get } from '@nestjs/common';
import { Product } from '../type';
import superbaseService from 'src/superbase.service';

@Controller('products')
export class ProductController {
  constructor() {}

  @Get()
  async getHello(): Promise<Product[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from('Product')
      .select('*');

    if (response.error) {
      return [];
    }
    const products = response.data as Product[];
    return products;
  }
}

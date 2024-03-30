import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('products')
export class ProductController {
  constructor() {}

  @Get()
  async getHello(): Promise<Product[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.PRODUCT)
      .select('*');

    if (response.error) {
      return [];
    }
    const products = response.data as Product[];
    return products;
  }

  @Post()
  async createProduct(@Body() newProduct: Product): Promise<Product> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.PRODUCT)
      .insert([newProduct]);

    if (response.error || !response.data) {
      console.error(response);
      throw new Error('Failed to create product.');
    }

    const createdProduct = response.data[0] as Product;
    return createdProduct;
  }

  @Put()
  async updateProduct(@Body() updatedProduct: Product): Promise<string> {
    const obj = JSON.parse(JSON.stringify(updatedProduct));

    const response = await superbaseService
      .getClient()
      .from(TABLE.PRODUCT)
      .update(obj)
      .eq('id', obj.id);

    if (response.error || !response.data) {
      throw new Error(`${response.error}`);
    }

    return 'OK';
  }
}

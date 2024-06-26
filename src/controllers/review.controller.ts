import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Review } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('reviews')
export class ReviewController {
  constructor() {}

  @Get()
  async getAll(): Promise<Review[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.REVIEW)
      .select('*');

    if (response.error) {
      return [];
    }
    const reviews = response.data as Review[];
    return reviews;
  }

  @Get(':id_product')
  async getSpecificReview(
    @Param('id_product') id_product: string,
  ): Promise<Review[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.REVIEW)
      .select('*')
      .eq('id_product', id_product);

    if (response.error) {
      return null;
    }
    const reviews = response.data as Review[];
    return reviews;
  }

  @Post()
  async createReview(@Body() review: Review): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.REVIEW)
      .insert(review);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

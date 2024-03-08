import { Controller, Get } from '@nestjs/common';
import { Review } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('reviews')
export class ReviewController {
  constructor() {}

  @Get()
  async getHello(): Promise<Review[]> {
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
}

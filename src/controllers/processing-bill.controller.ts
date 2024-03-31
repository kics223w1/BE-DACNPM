import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Bill } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('processing-bills')
export class ProcessingBillController {
  constructor() {}

  @Get()
  async getHello(): Promise<Bill[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.PROCESSING_BILL)
      .select('*');

    if (response.error) {
      return [];
    }
    const bills = response.data as Bill[];
    return bills;
  }

  @Post()
  async createUser(@Body() newBill: Bill): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.PROCESSING_BILL)
      .insert(newBill);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }

  @Put()
  async updateProduct(@Body() updatedBill: Bill): Promise<string> {
    const obj = JSON.parse(JSON.stringify(updatedBill));
    const response = await superbaseService
      .getClient()
      .from(TABLE.PROCESSING_BILL)
      .update(obj)
      .eq('id', obj.id);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

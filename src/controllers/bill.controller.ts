import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Bill } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('bills')
export class BillController {
  constructor() {}

  @Get()
  async getHello(): Promise<Bill[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.BILL)
      .select('*');

    if (response.error) {
      return [];
    }
    const bills = response.data as Bill[];
    return bills;
  }

  @Get(':id_user')
  async getInfoByIdUSer(@Param('id_user') id: string): Promise<Bill[] | []> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.BILL)
      .select('*')
      .eq('id_user', id);

    if (response.error) {
      return null;
    }
    const data = response.data as Bill[];
    return data;
  }

  @Post()
  async createUser(@Body() newBill: Bill): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.BILL)
      .insert(newBill);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

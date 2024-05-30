import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OmitTwo, PaymentInformation } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('payment-info')
export class PaymentInformationController {
  constructor() {}

  @Get(':id_user')
  async getInfoByIdUSer(
    @Param('id_user') id: string,
  ): Promise<PaymentInformation | null> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.PAYMENT_INFO)
      .select('*')
      .eq('id_user', id)
      .single();

    if (response.error) {
      return null;
    }
    const data = response.data as PaymentInformation;
    return data;
  }

  @Get()
  async getAll(): Promise<PaymentInformation[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.PAYMENT_INFO)
      .select('*');

    if (response.error) {
      return [];
    }
    const data = response.data as PaymentInformation[];
    return data;
  }

  @Post()
  async createInfo(
    @Body() newRow: OmitTwo<PaymentInformation, 'id', 'created_at'>,
  ): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.PAYMENT_INFO)
      .insert(newRow);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }

  @Put()
  async updateInfo(
    @Body() updatedRow: OmitTwo<PaymentInformation, 'id', 'created_at'>,
  ): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.PAYMENT_INFO)
      .update(updatedRow)
      .eq('id_user', updatedRow.id_user);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserInformation } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('user-info')
export class UserInformationController {
  constructor() {}

  @Get(':id_user')
  async getUserInfoById(
    @Param('id_user') id_user: string,
  ): Promise<UserInformation | null> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER_INFO)
      .select('*')
      .eq('id_user', id_user)
      .single();

    if (response.error) {
      return null;
    }
    const user = response.data as UserInformation;
    return user;
  }

  @Get()
  async getAll(): Promise<UserInformation[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER_INFO)
      .select('*');

    if (response.error) {
      return [];
    }
    const users = response.data as UserInformation[];
    return users;
  }

  @Post()
  async createInfo(@Body() newInfo: UserInformation): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER_INFO)
      .insert(newInfo);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }

  @Put()
  async updateInfo(@Body() newInfo: UserInformation): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER_INFO)
      .update(newInfo)
      .eq('id', newInfo.id);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

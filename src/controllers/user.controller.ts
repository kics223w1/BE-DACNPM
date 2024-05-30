import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('users')
export class UserController {
  constructor() {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .select('*')
      .eq('id', id)
      .single();

    if (response.error) {
      return null;
    }
    const user = response.data as User;
    return user;
  }

  @Get()
  async getAll(): Promise<User[]> {
    // Example: Query data from a table
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .select('*');

    if (response.error) {
      return [];
    }
    const users = response.data as User[];
    return users;
  }

  @Post()
  async createUser(
    @Body() newUser: { account: string; password: string; full_name: string },
  ): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .insert(newUser);

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }

  @Post(':account')
  async getUserByAccount(
    @Param('account') account: string,
    @Body() body: { password: string },
  ): Promise<User | null> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .select('*')
      .eq('account', account)
      .eq('password', body.password)
      .single();

    if (response.error) {
      return null;
    }

    const user = response.data as User;
    const responseUserInfo = await superbaseService
      .getClient()
      .from(TABLE.USER_INFO)
      .select('*')
      .eq('id_user', user.id_user)
      .single();

    const responsePaymentInfo = await superbaseService
      .getClient()
      .from(TABLE.PAYMENT_INFO)
      .select('*')
      .eq('id_user', user.id_user)
      .single();

    return {
      ...user,
      ...responseUserInfo.data,
      ...responsePaymentInfo.data,
    };
  }
}

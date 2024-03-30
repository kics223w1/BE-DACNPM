import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../type';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('users')
export class UserController {
  constructor() {}

  @Get()
  async getHello(): Promise<User[]> {
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
}

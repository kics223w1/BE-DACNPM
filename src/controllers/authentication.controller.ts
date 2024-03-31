import { Controller, Post, Body } from '@nestjs/common';
import superbaseService from 'src/superbase.service';
import { TABLE } from 'src/constant';

@Controller('auth')
export class AuthenticationController {
  constructor() {}

  @Post('login')
  async signin(
    @Body() user: { account: string; password: string },
  ): Promise<string> {
    const response = await superbaseService
      .getClient()
      .from(TABLE.USER)
      .select('*')
      .eq('account', user.account)
      .eq('password', user.password)
      .single();

    if (response.error) {
      throw new Error(`${response.error.message}`);
    }

    return 'OK';
  }
}

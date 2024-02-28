import { Controller, Get } from '@nestjs/common';
import { SuperbaseService } from './superbase.service';

@Controller()
export class AppController {
  constructor(private readonly superbaseService: SuperbaseService) {}

  @Get()
  async getHello(): Promise<string> {
    // Example: Query data from a table
    const { data, error } = await this.superbaseService
      .getClient()
      .from('t1')
      .select('');

    if (error) {
      throw new Error(error.message);
    }

    return data ? data.toString() : 'Hello World!';
  }
}

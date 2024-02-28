import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SuperbaseService } from './superbase.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [SuperbaseService], // Add SuperbaseService to the providers array
})
export class AppModule {}

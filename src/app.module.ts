import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatService } from './cat.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {}

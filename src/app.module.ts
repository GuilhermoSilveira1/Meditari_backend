import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './modules/content/content.module';
import { DeliveryModule } from './modules/delivery/delivery.module';

@Module({
  imports: [ContentModule, DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { ContentController } from './presentation/controllers/content/content.controller';
import { ContentService } from './application/services/content/content.service';

@Module({
  controllers: [ContentController],
  providers: [ContentService]
})
export class ContentModule {}

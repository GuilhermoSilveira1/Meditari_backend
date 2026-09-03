import { Module } from '@nestjs/common';
import { QuoteController } from './presentation/controllers/quote.controller';
import { CreateQuoteService } from './application/use-cases/create-quote/create-quote.service';
import { QuoteRepository } from './domain/repositories/quote.repository';
import { PrismaQuoteRepository } from './infraestructure/prisma-quote.repository';
import { PrismaModule } from '../../infrastructure/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [QuoteController],
  providers: [
    CreateQuoteService,
    { provide: QuoteRepository, useClass: PrismaQuoteRepository },
  ],
})
export class ContentModule {}

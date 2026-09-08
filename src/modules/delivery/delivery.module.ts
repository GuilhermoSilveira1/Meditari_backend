import { Module } from '@nestjs/common';
import { ContentModule } from '../content/content.module';
import { GetQuoteService } from './application/use-cases/get-quote/get-quote.service';
import { QuoteDeliveryRepository } from './domain/repositories/quote-delivery.repository';
import { PrismaQuoteDeliveryRepository } from './infraestructure/prisma-quote-delivery.repository';
import { QuoteDeliveryController } from './presentation/controllers/quote-delivery.controller';

@Module({
    imports: [ContentModule],
    controllers: [QuoteDeliveryController],
    providers: [
        GetQuoteService,
        {
            provide: QuoteDeliveryRepository,
            useClass: PrismaQuoteDeliveryRepository,
        },
    ],
})
export class DeliveryModule {}

import { Injectable } from '@nestjs/common';
import { QuoteDelivery } from '../domain/entities/quote-delivery.entity';
import { QuoteDeliveryRepository } from '../domain/repositories/quote-delivery.repository';
import { PrismaService } from '../../../infrastructure/database/prisma.service';

@Injectable()
export class PrismaQuoteDeliveryRepository implements QuoteDeliveryRepository {
    constructor(
        private readonly prisma: PrismaService,
    ){}

    async save(quote: QuoteDelivery): Promise<void> {
        await this.prisma.quoteDelivery.create({
            data: {
                id: quote.getId(),
                quoteId: quote.getQuoteId(),
                status: quote.getStatus(),
                createdAt: quote.getCreatedAt(),
                deliveredAt: quote.getDeliveredAt(),
                updatedAt: quote.getUpdatedAt(),
            },
        });
    }
}
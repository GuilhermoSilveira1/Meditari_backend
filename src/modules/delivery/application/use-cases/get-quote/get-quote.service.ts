import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { QuoteRepository } from '../../../../content/domain/repositories/quote.repository';
import { QuoteDelivery } from '../../../domain/entities/quote-delivery.entity';
import { QuoteDeliveryRepository } from '../../../domain/repositories/quote-delivery.repository';

@Injectable()
export class GetQuoteService {
    constructor (
        private readonly quoteDeliveryRepository : QuoteDeliveryRepository,
        private readonly quoteRepository : QuoteRepository
    ) {}

    async getDailyQuote(data: { topicId?: string }) {
        const quotes = await this.quoteRepository.findApproved(data.topicId);
        const quote = quotes[0];

        if (!quote) {
            throw new NotFoundException('No approved quote found');
        }

        const delivery = new QuoteDelivery({
            id: randomUUID(),
            quoteId: quote.getId(),
        });

        await this.quoteDeliveryRepository.save(delivery);

        return quote;
    }

}
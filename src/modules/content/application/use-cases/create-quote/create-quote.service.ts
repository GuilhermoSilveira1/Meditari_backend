import { Injectable } from '@nestjs/common';
import { Quote } from '../../../domain/entities/quote.entity';
import { QuoteRepository } from '../../../domain/repositories/quote.repository';
import { randomUUID } from 'node:crypto';

// Enums do status
@Injectable()
export class CreateQuoteService {
    constructor (
        private readonly quoteRepository : QuoteRepository
    ) {}

    async createNewQuote(data: {
        quote: string;
        context: string;
        authorId: string;
        topicId: string;
        subtopicId?: string;
        status?: 'draft' | 'approved' | 'delivered';
    }): Promise<Quote> {
        const quote = new Quote({
            id: randomUUID(),
            quote: data.quote,
            context: data.context,
            authorId: data.authorId,
            topicId: data.topicId,
            subtopicId: data.subtopicId,
            status: data.status,
        });

        await this.quoteRepository.save(quote);
        return quote;
    }
}
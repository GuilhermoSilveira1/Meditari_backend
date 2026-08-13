import { Injectable } from '@nestjs/common';
import { Quote } from 'src/modules/content/domain/entities/quote.entity';
import { QuoteRepository } from 'src/modules/content/domain/repositories/quote.repository';

@Injectable()
export class GetQuoteService {
    constructor (
        private readonly quoteRepository : QuoteRepository
    ) {}

    async execute(data: {
            topic: string
        }) {
            const quote = await this.quoteRepository.getQuote(data.topic)

            if (quote == null) {
                throw new Error('It was not possible to get a quote')
            }
        }
}
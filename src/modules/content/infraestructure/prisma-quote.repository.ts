import { Injectable } from '@nestjs/common';
import { Quote } from '../domain/entities/quote.entity';
import { QuoteRepository } from '../domain/repositories/quote.repository';

@Injectable
export class PrismaQuoteRepository implements QuoteRepository{
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async getQuote(topic: string): Promise<Quote | null> {
        const quote = 
            await this.prisma.quote.findMany({
                where: {topic}
            })
        if (!quote) {
            return null
        }

        return quote;
    }

    async save(quote: Quote): Promise<void> {
        await this.prisma.quote.create({
            data: {
                id: quote.getId(),
                quote: quote.getQuote,
                context: quote.getContext,
                authorId: quote.getAuthorId,
                topicId: quote.getTopicId,
                subtopicId: quote.getSubtopicId,
                status: quote.getStatus,
                createdAt: quote.getCreatedAt,
                updatedAt: quote.getUpdatedAt
            }
        })
    }
}
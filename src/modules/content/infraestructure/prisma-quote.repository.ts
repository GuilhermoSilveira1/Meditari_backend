import { Injectable } from '@nestjs/common';
import { Quote } from '../domain/entities/quote.entity';
import { QuoteRepository } from '../domain/repositories/quote.repository';
import { PrismaService } from '../../../infrastructure/database/prisma.service';

@Injectable()
export class PrismaQuoteRepository implements QuoteRepository{
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async findById(id: string): Promise<Quote | null> {
        const quote = await this.prisma.quote.findUnique({ where: { id } });
        return quote ? this.toEntity(quote) : null;
    }

    async findByTopic(topicId: string): Promise<Quote[]> {
        const quotes = await this.prisma.quote.findMany({ where: { topicId } });
        return quotes.map((quote) => this.toEntity(quote));
    }

    // Function responsible for saving a new quote on the database
    async save(quote: Quote): Promise<void> {
        await this.prisma.quote.create({
            data: {
                id: quote.getId(),
                quote: quote.getQuote(),
                context: quote.getContext(),
                authorId: quote.getAuthorId(),
                topicId: quote.getTopicId(),
                subtopicId: quote.getSubtopicId(),
                status: quote.getStatus(),
                createdAt: quote.getCreatedAt(),
                updatedAt: quote.getUpdatedAt()
            }
        })
    }

    private toEntity(data: {
        id: string;
        quote: string;
        context: string;
        authorId: string;
        topicId: string;
        subtopicId: string;
        status: 'draft' | 'approved' | 'delivered';
        createdAt: Date;
        updatedAt: Date;
    }): Quote {
        return new Quote(data);
    }
}
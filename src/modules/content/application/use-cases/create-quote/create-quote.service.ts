import { Injectable } from '@nestjs/common';
import { Quote } from 'src/modules/content/domain/entities/quote.entity';
import { QuoteRepository } from 'src/modules/content/domain/repositories/quote.repository';

// Enums do status
export type QuoteStatus = 'draft' | 'approved' | 'delivered'

@Injectable()
export class CreateQuoteService {
    constructor (
        private readonly quoteRepository : QuoteRepository
    ) {}

    async createNewQuote(data: {
            quote: string,
            context: string,
            authorId: string
            topicId: string,
            subTopicId: string,
            status: QuoteStatus
        }) {
            // Criando as constantes e validando os dados
            const quoteId = 'no idea'
            const quoteText = data.quote
            const context = data.context
            const authorId = data.authorId
            const topicId = data.topicId
            const subtopicId = data.subTopicId
            const status = data.status
            const createdAt = new Date()
            const updatedAt = new Date()

            if (
                !data.quote ||
                !data.context ||
                !data.authorId ||
                !data.topicId ||
                !data.subTopicId ||
                !data.status
            ){
                throw new Error('Quote, context, author, topic, subtopic or status cannot be null')
            }

            // Criando o objeto props com todas as variáveis juntas
            const props = {
                    id: quoteId,
                    quote: quoteText,
                    context,
                    authorId,
                    topicId,
                    subtopicId,
                    status,
                    createdAt,
                    updatedAt
                }

            const quote = new Quote(props) 

            await this.quoteRepository.save(quote)

        }
}
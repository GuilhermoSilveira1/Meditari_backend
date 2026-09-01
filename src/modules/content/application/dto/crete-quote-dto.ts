import { QuoteStatus } from '../../domain/entities/quote.entity';

export class CreateQuoteDto {
  quote!: string;
  context!: string;
  authorId!: string;
  topicId!: string;
  subTopicId!: string;
  status!: QuoteStatus;
}
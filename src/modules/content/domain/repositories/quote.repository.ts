import { Quote } from '../entities/quote.entity'

export abstract class QuoteRepository {
  abstract findById(
    id: string,
  ): Promise<Quote | null>;

  abstract findByTopic(
      topicId: string,
  ): Promise<Quote[]>;

  abstract save(
      quote: Quote,
  ): Promise<void>;
}
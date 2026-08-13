import { Quote } from '../entities/quote.entity'

export abstract class QuoteRepository {
  abstract getQuote(
    topic: string,
  ): Promise<Quote | null>;

  abstract save(
    quote: Quote,
  ): Promise<void>;
}
import { QuoteDelivery } from "../entities/quote-delivery.entity";

export abstract class QuoteDeliveryRepository {
  abstract findById(
    id: string,
  ): Promise<QuoteDelivery | null>;

  abstract findByTopic(
      topicId: string,
  ): Promise<QuoteDelivery[]>;

  abstract save(
      quote: QuoteDelivery,
  ): Promise<void>;
}
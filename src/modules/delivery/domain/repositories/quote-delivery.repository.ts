import { QuoteDelivery } from "../entities/quote-delivery.entity";

export abstract class QuoteDeliveryRepository {
  abstract save(
      quote: QuoteDelivery,
  ): Promise<void>;
}
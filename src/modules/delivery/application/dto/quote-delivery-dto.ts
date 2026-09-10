import { IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';
import type { QuoteDeliveryStatus } from '../../domain/entities/quote-delivery.entity';

export class QuoteDeliveryDto {
  @IsString()
  @IsNotEmpty()
  quoteId!: string;

  @IsOptional()
  @IsIn(['undelivered', 'delivered'])
  status?: QuoteDeliveryStatus;
}
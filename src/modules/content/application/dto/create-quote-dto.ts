import { IsNotEmpty, IsOptional, IsString, IsIn } from 'class-validator';
import type { QuoteStatus } from '../../domain/entities/quote.entity';

export class CreateQuoteDto {
  @IsString()
  @IsNotEmpty()
  quote!: string;

  @IsString()
  @IsNotEmpty()
  context!: string;

  @IsString()
  @IsNotEmpty()
  authorId!: string;

  @IsString()
  @IsNotEmpty()
  topicId!: string;

  @IsOptional()
  @IsString()
  subtopicId?: string;

  @IsOptional()
  @IsIn(['draft', 'approved', 'delivered'])
  status?: QuoteStatus;
}
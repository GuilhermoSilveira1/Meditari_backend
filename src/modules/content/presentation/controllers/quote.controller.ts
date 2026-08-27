import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuoteService } from '../../application/use-cases/create-quote/create-quote.service';
import { QuoteRepository } from '../../domain/repositories/quote.repository';
import { QuoteStatus } from '../../domain/entities/quote.entity';

export class CreateQuoteDto {
  quote!: string;
  context!: string;
  authorId!: string;
  topicId!: string;
  subTopicId!: string;
  status!: QuoteStatus;
}

@Controller('quotes')
export class QuoteController {
  constructor(
    private readonly createQuoteService: CreateQuoteService,
    private readonly quoteRepository: QuoteRepository,
  ) {}

  @Post()
  async create(@Body() body: CreateQuoteDto) {
    return this.createQuoteService.createNewQuote(body);
  }

  @Get('topic/:topicId')
  async findByTopic(@Param('topicId') topicId: string) {
    return this.quoteRepository.findByTopic(topicId);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.quoteRepository.findById(id);
  }
}
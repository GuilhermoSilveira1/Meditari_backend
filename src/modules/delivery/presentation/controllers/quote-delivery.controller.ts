import { Controller, Get, Query } from '@nestjs/common';
import { GetQuoteService } from '../../application/use-cases/get-quote/get-quote.service';

@Controller()
export class QuoteDeliveryController {
	constructor(private readonly getQuoteService: GetQuoteService) {}

	@Get('daily-quote')
	async getDailyQuote(@Query('topicId') topicId?: string) {
		return this.getQuoteService.getDailyQuote({ topicId });
	}
}

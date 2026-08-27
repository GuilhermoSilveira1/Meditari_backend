import { Test, TestingModule } from '@nestjs/testing';
import { CreateQuoteService } from '../../application/use-cases/create-quote/create-quote.service';
import { QuoteRepository } from '../../domain/repositories/quote.repository';
import { CreateQuoteDto, QuoteController } from './quote.controller';

describe('QuoteController', () => {
  let controller: QuoteController;
  const createNewQuote = jest.fn();
  const findById = jest.fn();
  const findByTopic = jest.fn();

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [
        {
          provide: CreateQuoteService,
          useValue: { createNewQuote },
        },
        {
          provide: QuoteRepository,
          useValue: { findById, findByTopic },
        },
      ],
    }).compile();

    controller = module.get<QuoteController>(QuoteController);
  });

  it('creates a quote through the service', async () => {
    const body: CreateQuoteDto = {
      quote: 'A meaningful quote',
      context: 'Reflection',
      authorId: 'author-1',
      topicId: 'topic-1',
      subTopicId: 'subtopic-1',
      status: 'draft',
    };

    await controller.create(body);

    expect(createNewQuote).toHaveBeenCalledWith(body);
  });

  it('finds a quote by id through the repository', async () => {
    await controller.findById('quote-1');

    expect(findById).toHaveBeenCalledWith('quote-1');
  });

  it('finds quotes by topic through the repository', async () => {
    await controller.findByTopic('topic-1');

    expect(findByTopic).toHaveBeenCalledWith('topic-1');
  });
});
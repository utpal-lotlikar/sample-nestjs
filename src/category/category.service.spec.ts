import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from '../../schemas/category.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService, { provide: getModelToken(Category.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

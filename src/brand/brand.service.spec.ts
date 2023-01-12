import { Test, TestingModule } from '@nestjs/testing';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

describe('BrandService', () => {
  let service: BrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandService],
    }).compile();

    service = module.get<BrandService>(BrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a brand', () => {
    let dto = new CreateBrandDto();
    dto.name = "Brand";
    dto.description = "Brand description";
    const brand = service.create(dto);
    expect(brand.name).toBe("Brand");
    expect(brand.description).toBe("Brand description");
  });
});

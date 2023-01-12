import { Injectable } from '@nestjs/common';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
  private readonly brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto): Brand {
    let b = new Brand()
    b.name = createBrandDto.name;
    b.description = createBrandDto.description;
    this.brands.push(b);
    return b;
  }

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: number): Brand {
    return this.brands[id];
  }

  update(id: number, updateBrandDto: UpdateBrandDto): Brand {
    let b = this.brands[id];
    b.name = updateBrandDto.name;
    b.description = updateBrandDto.description;
    return b;
  }

  remove(id: number): String  {
    return `This action removes a #${id} brand`;
  }
}

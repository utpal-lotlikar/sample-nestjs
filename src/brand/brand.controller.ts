import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, ParseIntPipe, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { RequestId } from 'src/requestId.token.decorator';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Controller('brand')
export class BrandController {
  private readonly logger = new Logger(BrandController.name);

  constructor(
    private readonly brandService: BrandService
  ) {}

  @Post()
  create(@RequestId() requestId: String, @Body() createBrandDto: CreateBrandDto): Brand {
    this.logger.warn({"message":"Create brand initiated", "requestId": requestId, "tenantId": 2});
    let brand = this.brandService.create(createBrandDto);
    this.logger.log({"message":"Create brand complete", "requestId": requestId, "tenantId": 2});
    return brand;
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Brand {
    this.logger.log({"message":"Get brand initiated for id:" + id, "requestId": "ABXGH", "tenantId": 2});
    let b =  this.brandService.findOne(id);
    if (b === undefined) {
      throw new NotFoundException("Failed to locate brand");
    }
    this.logger.warn({"message":"Get brand completed" , "requestId": "ABXGH", "tenantId": 2});
    return b;
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}

import { Controller, Get , Post, Body, Param, Patch, Delete, ParseIntPipe,  NotFoundException, ConflictException} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {

	constructor(
    	private readonly categoryService: CategoryService
  	) {}

	@Get()
	findAll() {
		return this.categoryService.findAll();
	}

	@Get('/:id')
	async getMessage(@Param('id', ParseIntPipe) id: number) {
		const result = await this.categoryService.findOne(id);
		if(!result) throw new NotFoundException('message not found');
		return result;
	}

	@Post()
	async create(@Body() dto: CreateCategoryDto) {
		const result = await this.categoryService.create(dto);
		if(!result) throw new ConflictException('duplicate record');
		return result;
	}

	@Patch('/:id')
	async update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateCategoryDto) {
		const result = await this.categoryService.update(id, dto);
		if(!result) throw new ConflictException('duplicate record');
		return result;
	}

	@Delete('/:id')
	async remove(@Param('id', ParseIntPipe) id: number) {
		const result = await this.categoryService.remove(id);
		if(!result) throw new NotFoundException('message not found');
		return result;
	}
}

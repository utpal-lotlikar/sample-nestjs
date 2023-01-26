import { Controller, Get , Post, Body, Param, Patch, Delete, ParseIntPipe,  NotFoundException, ConflictException} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

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
	findOne(@Param('id') id: string) {
		let b = this.categoryService.findOne(id);
		if (b === undefined) {
		throw new NotFoundException("Failed to locate brand");
		}
		return b;
	}

	@Post()
	create(@Body() dto: CreateCategoryDto) {
		return this.categoryService.create(dto);
	}

	@Patch('/:id')
	update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
		return  this.categoryService.update(id, dto);
	}

	@Delete('/:id')
	remove(@Param('id') id: string) {
		return this.categoryService.remove(id);
	}
}

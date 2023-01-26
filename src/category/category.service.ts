import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../../schemas/category.schema';
// import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto'
import { UpdateCategoryDto } from './dtos/update-category.dto'

@Injectable()
export class CategoryService {

  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category>{
    const createdCategory = new this.categoryModel(createCategoryDto)
    return createdCategory.save();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
  	let existing = await this.categoryModel.findOne({ "name": updateCategoryDto.name, "_id" : { $ne: id}}).exec();
    if (existing === null) {
      return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true});
    } else {
      throw new HttpException("Brand with name " + updateCategoryDto.name + " already exists", HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryModel.findById(id).exec();
  }

  async findAll() {
    return this.categoryModel.find().exec();;
  }

  async remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }

}

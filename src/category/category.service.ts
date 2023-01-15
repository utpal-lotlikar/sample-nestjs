import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto'

@Injectable()
export class CategoryService {
	private categories: Category[] = [];


  searchById(list: Category[], id: number){
  	const result = list.filter(function(ele){
  		return ele.id == id;
  	})
  	if(result[0]) return result[0];
  	else return null;
  }	

  searchByName(list: Category[], name: String){
  	const result = list.filter(function(ele){
  		return ele.name == name;
  	})
  	if(result[0]) return true;
  	else return false;
  }	

  create(createCategoryDto: CreateCategoryDto) {

  	if(this.searchByName(this.categories, createCategoryDto.name)) return null;

    let c = new Category()
    c.id = Math.floor(Math.random()*999);
    c.name = createCategoryDto.name;
    c.status = createCategoryDto.status;
    this.categories.push(c);
    return c;
  }

  update(id: number, createCategoryDto: CreateCategoryDto) {
  	let category = this.findOne(id);
  	if(!category) return {statusCode: 404, message: 'Not found'};

  	if(this.searchByName(this.categories, createCategoryDto.name)) return {statusCode: 409, message: 'duplicate exist'};

    category.name = createCategoryDto.name;
    category.status = createCategoryDto.status;
    return category;
  }

  findOne(id: number) {
  	return this.searchById(this.categories, id) 
  }

  findAll(): Category[] {
    return this.categories;
  }

  remove(id: number): String {
  	this.categories = this.categories.filter(function(ele){
  		return ele.id != id;
  	})
  	return `Removed category with  id #${id} `;
  }

}

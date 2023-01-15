import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    name: String;

    status: Boolean;
    
}

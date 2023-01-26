import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class UpdateCategoryDto {

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    name: String;

    status: Boolean;
    
}

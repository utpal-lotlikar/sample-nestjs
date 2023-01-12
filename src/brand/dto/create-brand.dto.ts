import { IsEmail, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsNotEmpty()
    name: String;

    @IsOptional()
    @MinLength(0)
    @MaxLength(2)
    description: String;
    
    @IsEmail()
    email: string;
}

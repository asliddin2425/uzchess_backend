import { IsOptional, IsString, MaxLength } from "class-validator";

export class UserUpdate {
    @IsString()
    @IsOptional()
    @MaxLength(64)
    fullName!: string;

    @IsString()
    @IsOptional()
    @MaxLength(64)
    login!: string;

    @IsString()
    @IsOptional()
    @MaxLength(32)
    password!: string;

}
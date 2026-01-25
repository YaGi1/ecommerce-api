import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, Min, IsBoolean, IsOptional } from 'class-validator';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  priceCents: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  stock: number;

  @IsOptional()
  @IsBoolean()
  isAvailable: boolean
}
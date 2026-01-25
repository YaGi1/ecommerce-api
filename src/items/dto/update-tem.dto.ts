import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength, Min, IsBoolean, IsOptional } from 'class-validator';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ example: 'Milk' })
  name: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty({ example: '1200' })
  priceCents: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ example: '10' })
  stock: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: 'false' })
  isAvailable: boolean
}
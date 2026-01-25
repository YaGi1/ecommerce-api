import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty({ example: 'Milk' })
  name: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({ example: '1200' })
  priceCents: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({ example: '10' })
  stock: number;}
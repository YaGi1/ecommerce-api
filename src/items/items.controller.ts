import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-tem.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async list() {
    return this.itemsService.listPublicItems();
  }

  @Post()
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 201, description: 'Item created' })
  async create(@Body() dto: CreateItemDto) {    
    return this.itemsService.createItem(dto);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateItemDto })
  @ApiResponse({ status: 200, description: 'Item updated' })
  async patch(@Param('id') id: string, @Body() dto: UpdateItemDto) {
    return this.itemsService.updateItem(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    await this.itemsService.deleteItem(id);
  }
}
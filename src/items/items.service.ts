import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService} from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-tem.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async createItem(dto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        name: dto.name,
        priceCents: dto.priceCents,
        stock: dto.stock,
        isAvailable: true,
      },
    });
  }

  async listPublicItems() {
    return this.prisma.item.findMany({
      where: {
        deletedAt: null,
        isAvailable: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateItem(id: string, dto: UpdateItemDto) {
    try {
      return await this.prisma.item.update({
        where: { id, deletedAt: null },
        data: dto,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
        throw new NotFoundException('Item not found');
      }
      throw e;
    }
  }
  async deleteItem(id: string) {
    const res = await this.prisma.item.updateMany({
      where: { id, deletedAt: null },
      data: { deletedAt: new Date() },
    });
    if (res.count === 0) {
      throw new NotFoundException('Item not found');
    }
  }
}

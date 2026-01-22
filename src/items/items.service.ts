import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  async listPublicItems() {
    return this.prisma.item.findMany({
      where: {
        deletedAt: null,
        isAvailable: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}

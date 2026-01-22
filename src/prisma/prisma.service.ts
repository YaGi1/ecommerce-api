import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // opens connections (Prisma actually connects lazily, but this is a clean explicit hook)
    await this.$connect();
  }

  async onModuleDestroy() {
    // graceful shutdown (important in prod)
    await this.$disconnect();
  }
}

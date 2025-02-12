import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductController } from './product/product.controller';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController]
})
export class ProductModule {}

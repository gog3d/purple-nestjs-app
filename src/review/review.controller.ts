import { Body, Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post()
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Delete()
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {

	}

}

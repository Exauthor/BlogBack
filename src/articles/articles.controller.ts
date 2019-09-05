import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateArticleDto } from './interfaces/create-article.dto';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return `Get article by id: ${id}`;
  }

  @Post()
  create(@Body() article: CreateArticleDto) {
    return this.articlesService.create(article);
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Update article by id: ${id}`;

  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete article by id: ${id}`;
  }
}

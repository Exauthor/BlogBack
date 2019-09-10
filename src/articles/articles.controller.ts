import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './interfaces/create-article.dto';
import { Article } from './interfaces/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':title')
  getByTitle(@Param('title') title: string) {
    return this.articlesService.findByTitle(title);
  }

  @Post()
  create(@Body() article: CreateArticleDto) {
    return this.articlesService.create(article);
  }

  @Put(':title')
  update(@Param('title') title: string, article: CreateArticleDto) {
    return this.articlesService.update(title, article);
  }

  @Delete()
  delete(@Body() article: CreateArticleDto) {
    return this.articlesService.delete(article);
  }
}

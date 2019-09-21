import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './interfaces/create-article.dto';
import { Article } from './interfaces/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getAll(): Promise<Article[]> {
    return await this.articlesService.findAll();
  }

  @Get(':title')
  async getByTitle(@Param('title') title: string) {
    return await this.articlesService.findByTitle(title);
  }

  @Post()
  async create(@Body() article: CreateArticleDto) {
    const isExist = await this.articlesService.findByTitle(article.id);
    console.log('create Article', article.title, isExist.length)
    if (isExist.length) {
      return await this.articlesService.update(article.id, article);
    } else {
      return await this.articlesService.create(article);
    }
  }

  @Put(':title')
  async update(@Param('title') title: string, article: CreateArticleDto) {
    return await this.articlesService.update(title, article);
  }

  @Delete()
  async delete(@Body() article: CreateArticleDto) {
    console.log(article, 'DELETE')
    return await this.articlesService.delete(article);
  }
}

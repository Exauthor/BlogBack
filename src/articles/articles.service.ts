import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './interfaces/create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async findByTitle(title: string): Promise<Article[]> {
    return await this.articleModel.find({id: title}).exec();
  }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  async update(title: string, article: CreateArticleDto) {
    return await this.articleModel.updateOne({title: title}, article).exec();
  }

  async delete(article: CreateArticleDto) {
    return await this.articleModel.deleteOne(article).exec();
  }
}
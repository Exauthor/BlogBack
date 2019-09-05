import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './interfaces/create-article.dto';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return await createdArticle.save();
    }

    add(article: CreateArticleDto) {
        return [`ADD ATICLE TO DB`, article]
    }

    async findAll(): Promise<Article[]> {
      return await this.articleModel.find().exec();
    }
}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { UserDto } from './interfaces/create-user.dto';
// import { User } from './user.entity';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private readonly usersRepository: Repository<User>,
//   ) {}

//   add(user: UserDto): string {
//     this.usersRepository.save(user)
//     return 'Success add';
//   }

//   findOne = async (id: string) => {
//     return this.usersRepository.findOneOrFail(id);
//   }

//   findAll(): Promise<User[]> {
//     return this.usersRepository.find();
//   }

//   update = async (id: string, userDto: UserDto) => {
//     return this.usersRepository.save({ ...userDto, id: Number(id) });
//   }

//   delete = async (id: string) => {
//     await this.usersRepository.findOneOrFail(id);
//     return this.usersRepository.delete(id);
//   }
// }
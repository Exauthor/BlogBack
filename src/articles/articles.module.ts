import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticleSchema } from './schemas/article.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])],
  providers: [ArticlesService],
  controllers: [ArticlesController]
})
export class ArticlesModule {}

// import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user.entity';
// import { UsersController } from './users.controller';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   providers: [UsersService],
//   exports: [UsersService],
//   controllers: [UsersController],
// })

// export class UsersModule {
//   constructor(private readonly userService: UsersService) {}
// }
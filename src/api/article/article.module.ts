import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { RoleModule } from '../role/role.module';
import { User } from '../user/entities/user.entity';
import { Article } from './entities/article.entity';

@Module({
  imports: [TypegooseModule.forFeature([Article, User]), RoleModule],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}

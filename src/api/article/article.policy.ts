import { BasePolicy } from '../../common/helper/base-policy';
import * as Mongoose from 'mongoose';
import { Article } from './entities/article.entity';
export class ArticlePolicy extends BasePolicy<Article> {
  constructor(model: Mongoose.Model<Article>) {
    super(model);
  }
}

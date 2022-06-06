import { index, ModelOptions, plugin, Prop, Ref } from '@typegoose/typegoose';
import { User } from '../../user/entities/user.entity';
import * as mongoosePopulate from 'mongoose-autopopulate';
import { CommentAttachmentType } from '../enum/comment-attachment-type';

export class Attachtment {
  @Prop({required: false})
  url?: string;

  @Prop({required: false})
  type?: CommentAttachmentType;
}

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
})
// @plugin(mongoosePopulate as any)
export class Comment {
  @Prop({ required: true, trim: true })
  body: string;

  @Prop({ ref: () => User, required: true })
  user: Ref<User>;

  @Prop({ required: false })
  attachment: Attachtment;


  @Prop({ required: true, refPath: 'resource_type' })
  resource: string;


  @Prop({
    ref: () => 'Comment',
    foreignField: 'parent',
    localField: '_id',
    autopopulate: true,
    select: '',
  })
  childs: Ref<Comment >[];


}

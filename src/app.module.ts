import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { RoleModule } from './api/role/role.module';
import { SessionModule } from './api/session/session.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypegooseModule } from 'nestjs-typegoose';
import { AdminModule } from './api/admin/admin.module';
import { EventModule } from './api/event/event.module';
import { ArticleModule } from './api/article/article.module';
import { CommentModule } from './api/comment/comment.module';

@Module({
  imports: [

    ThrottlerModule.forRoot(),
    TypegooseModule.forRoot('mongodb+srv://niloy01:niloy01@cluster0.wbl2trv.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod'],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
   // RoleModule,
    SessionModule,
   AdminModule,
   EventModule,
   ArticleModule,
   CommentModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

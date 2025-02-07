import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoModule } from './memo/memo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo } from './memo/entity/memo.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MemoModule, HttpModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '58.231.192.207',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'memo',
      entities: [Memo],
      synchronize: true,     
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

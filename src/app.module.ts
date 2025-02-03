import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoModule } from './memo/memo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo } from './memo/entity/memo.entity';

@Module({
  imports: [MemoModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1',
      port: 3310,
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

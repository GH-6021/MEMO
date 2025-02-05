import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ForbiddenException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //dto에 정의된 속성만 허용
    forbidNonWhitelisted:true, //정의안된 속성 => 에러 발생생
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

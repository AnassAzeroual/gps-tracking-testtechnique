import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, DELETE, OPTIONS',
    );
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  await app.listen(3000);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Cors
    app.enableCors();

    // Input validation
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    await app.listen(3000);
}
bootstrap();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Bootstrap');
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Grade Management RESTFul API')
        .setDescription('Grade Management endpoints')
        .setVersion('1.0')
        .addTag('Students')
        .addTag('Subjects')
        .addTag('Grades')
        .addTag('Reports')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map
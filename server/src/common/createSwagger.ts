import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


// @nestjs/swagger swagger-ui-express

const createDocument = (app) => {

    const config = new DocumentBuilder()
        .setTitle('My API')
        .setDescription('API documentation for my Nest.js app')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    // return {
    //     config,
    //     document
    // }
}


export default createDocument;
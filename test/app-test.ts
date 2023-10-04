import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../src/app.module';
import { User } from '../src/entities/user.entity';

export class AppTest {
  static app: INestApplication;

  static async start() {
    const moduleFixture = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'rjurado',
          database: 'test',
          entities: [User],
          synchronize: true,
        }),
      ],
    }).compile();

    this.app = moduleFixture.createNestApplication();
    await this.app.init();
  }

  static async stop() {
    await this.app.close();
  }
}

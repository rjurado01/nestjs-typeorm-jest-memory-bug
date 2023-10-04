import * as request from 'supertest';
import { AppTest } from '../app-test';

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return request(AppTest.app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

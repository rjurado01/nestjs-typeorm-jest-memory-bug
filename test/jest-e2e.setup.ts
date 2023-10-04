import { AppTest } from './app-test';

beforeAll(async () => {
  await AppTest.start();
});

afterAll(async () => {
  await AppTest.stop();
});

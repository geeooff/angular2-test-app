import { SuperPipe } from './super.pipe';

describe('SuperPipe', () => {
  it('create an instance', () => {
    const pipe = new SuperPipe();
    expect(pipe).toBeTruthy();
  });
});

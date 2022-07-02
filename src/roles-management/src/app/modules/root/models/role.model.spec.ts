import { Role } from './role.model';

describe('Role', () => {
  it('should create an instance', () => {
    expect(new Role('test')).toBeTruthy();
  });
});

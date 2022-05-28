import { App } from 'realm-web';
import realmApp from './realmApp';

describe('realmApp', () => {
  it('is an instance of App', () => {
    expect(realmApp).toBeInstanceOf(App);
  });
});

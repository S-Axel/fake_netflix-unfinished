import { Credentials } from 'realm-web';

import postLogin from './postLogin';
import realmApp from './realmApp';

jest.mock('./realmApp');

const baseMock = {
  email: 'someEmail',
  password: 'somePassword',
};
let copyMock;

beforeEach(() => {
  realmApp.logIn.mockImplementation(() => Promise.resolve());
  copyMock = { ...baseMock };
});

describe('postLogin', () => {
  it('is a function', () => {
    expect(typeof postLogin).toBe('function');
  });

  it('returns a promise', () => {
    expect(postLogin(copyMock.email, copyMock.password)).toBeInstanceOf(Promise);
  });

  describe('calls realmApp.logIn', () => {
    it('', () => {
      postLogin(copyMock.email, copyMock.password);

      expect(realmApp.logIn).toHaveBeenCalledTimes(1);
    });

    it('with right args', () => {
      postLogin(copyMock.email, copyMock.password);
      const loginArg = realmApp.logIn.mock.calls[0][0];

      expect(loginArg).toBeInstanceOf(Credentials);
      expect(loginArg.payload.username).toBe(baseMock.email);
      expect(loginArg.payload.password).toBe(baseMock.password);
    });
  });
});

import postLogout from './postLogout';
import realmApp from './realmApp';

jest.mock('./realmApp');

describe('postLogout', () => {
  it('is a function', () => {
    expect(typeof postLogout).toBe('function');
  });
  it('calls realm logOut on current user', () => {
    realmApp.currentUser = {
      logOut: jest.fn(() => {}),
    };
    postLogout();
    expect(realmApp.currentUser.logOut).toHaveBeenCalled();
  });
  it('returns realm logOut return value', () => {
    realmApp.currentUser = {
      logOut: () => ('mockLogOutReturn'),
    };
    postLogout();
    expect(postLogout()).toBe('mockLogOutReturn');
  });
});

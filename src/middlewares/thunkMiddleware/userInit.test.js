import { selectConnected } from '../../selectors/userSelectors';
import userInit from './userInit';
import realmApp from '../../apis/realm/realmApp';

jest.mock('../../selectors/userSelectors', () => ({
  __esModule: true,
  selectConnected: jest.fn(),
}));
jest.mock(
  '../../apis/realm/realmApp',
  () => ({
    __esModule: true,
    default: { currentUser: { isLoggedIn: true } },
  }),
);
jest.mock('../../actions/user/actionLogin', () => ({
  __esModule: true,
  default: () => 'actionLoginReturn',
}));

describe('userInit', () => {
  it(
    'dispatch actionLogin if realmApp.isLoggedIn: true and store.user.connected: false',
    () => {
      selectConnected.mockImplementation(() => false);
      realmApp.currentUser.isLoggedIn = true;
      const mockDispatch = jest.fn();
      userInit(null, { dispatch: mockDispatch, getState: () => {} });
      expect(mockDispatch).toHaveBeenCalledWith('actionLoginReturn');
    },
  );

  const cases = [
    {
      realmAppCurrentUser: null,
      storeConnected: false,
    },
    {
      realmAppCurrentUser: { isLoggedIn: true },
      storeConnected: true,
    },
    {
      realmAppCurrentUser: null,
      storeConnected: true,
    },
  ];
  it.each(cases)(
    'does not dispatch actionLogin if realmApp.currentUser: realmAppCurrentUser and store.user.connected: $storeConnected',
    ({ realmAppCurrentUser, storeConnected }) => {
      selectConnected.mockImplementation(() => storeConnected);
      realmApp.currentUser = realmAppCurrentUser;
      const mockDispatch = jest.fn();
      userInit(null, { dispatch: mockDispatch, getState: () => {} });
      expect(mockDispatch).not.toHaveBeenCalled();
    },
  );
});

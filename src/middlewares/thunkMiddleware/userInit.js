import realmApp from '../../apis/realm/realmApp';
import { selectConnected } from '../../selectors/userSelectors';
import actionLogin from '../../actions/user/actionLogin';

/**
 * Redux thunk payload creator
 * Init user auth: if user persisted with realm-web, update redux store.
 * @param {*} arg
 * @param {Object} thunkAPI
 * @returns {Promise<void>}
 */
const userInit = async (arg, thunkAPI) => {
  const isConnected = selectConnected(thunkAPI.getState());
  if (realmApp.currentUser?.isLoggedIn && !isConnected) {
    thunkAPI.dispatch(actionLogin());
  }
};

export default userInit;

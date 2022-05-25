import * as Realm from 'realm-web';
import realmApp from './realmApp';

/**
 * Make a post call with realm-web api to login the user.
 *
 * @category realm Api
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const postLogin = (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  return realmApp.logIn(credentials);
};

export default postLogin;

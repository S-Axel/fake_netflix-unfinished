import * as Realm from 'realm-web';
import realmApp from './realmApp';

const postLogin = (email, password) => {
  const credentials = Realm.Credentials.emailPassword(email, password);
  return realmApp.logIn(credentials);
};

export default postLogin;

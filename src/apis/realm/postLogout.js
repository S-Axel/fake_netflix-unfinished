import realmApp from './realmApp';

/**
 * Make a post call with realm-web api to logout the user.
 *
 * @category realm Api
 *
 * @returns {Promise<void>}
 */
const postLogout = () => (realmApp.currentUser?.logOut());

export default postLogout;

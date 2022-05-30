import postLogin from '../../apis/realm/postLogin';
import { WRONG_CREDENTIALS } from '../../constants/errorMessages';

/**
 * Try login the user on server and handle errors
 * @param {Object} arg
 * @param {string} arg.email
 * @param {string} arg.password
 * @returns {Promise<void>}
 */
const apiLogin = async ({ email, password }) => {
  try {
    await postLogin(email, password);
  } catch (e) {
    throw new Error(WRONG_CREDENTIALS);
  }
};

export default apiLogin;

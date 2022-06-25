import { SERVER_ERROR } from '../../constants/errorMessages';
import postLogout from '../../apis/realm/postLogout';

/**
 * Redux thunk payload creator
 * Try logout the user on server and handle errors
 * @returns {Promise<void>}
 */
const apiLogout = async () => {
  try {
    await postLogout();
  } catch (e) {
    throw new Error(SERVER_ERROR);
  }
};

export default apiLogout;

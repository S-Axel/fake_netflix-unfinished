import { createAction } from '@reduxjs/toolkit';

/**
 * action to login the user
 * @type {PayloadActionCreator<void, "user/login">}
 */
const actionLogin = createAction('user/login');

export default actionLogin;

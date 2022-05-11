import { useState } from 'react';

import './styles.css';
import TextField from '../../../components/TextField';

function LoginForm() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-form">
      <h1 className="login-form__title">Sign In</h1>
      <form onSubmit={() => null}>
        <TextField
          className="login-form__text-field"
          label="Email or phone number"
          id="emailOrPhone"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={onChangeHandler}
        />
        <TextField
          className="login-form__text-field"
          label="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
}

export default LoginForm;

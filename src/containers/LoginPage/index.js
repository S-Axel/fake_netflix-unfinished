import { useState } from 'react';

import './styles.css';
import LogoNetflix from '../../components/LogoNetflix';
import backgroundImg from '../../assets/images/logged_out_background.jpg';
import TextField from '../../components/TextField';

function LoginPage() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
  });

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-page">
      <div className="background" aria-hidden="true">
        <img className="background__img" src={backgroundImg} alt="background" />
      </div>
      <header className="header">
        <LogoNetflix className="header__logo" />
      </header>
      <main className="login-form__container">
        <div className="login-form">
          <h1>Sign In</h1>
          <form onSubmit={() => null}>
            <TextField
              label="Email or phone number"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={onChangeHandler}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

import { Link } from 'react-router-dom';

import LogoNetflix from '../../components/LogoNetflix';
import './styles.css';
import backgroundImg from '../../assets/images/logged_out_background.jpg';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="background" aria-hidden="true">
        <img className="background__img" src={backgroundImg} alt="background" />
      </div>
      <header className="header">
        <Link to="/">
          <LogoNetflix className="header__logo" />
        </Link>
      </header>
    </div>
  );
}

export default LoginPage;

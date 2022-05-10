import './styles.css';
import LogoNetflix from '../../components/LogoNetflix';
import backgroundImg from '../../assets/images/logged_out_background.jpg';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="background" aria-hidden="true">
        <img className="background__img" src={backgroundImg} alt="background" />
      </div>
      <header className="header">
        <LogoNetflix className="header__logo" />
      </header>
    </div>
  );
}

export default LoginPage;

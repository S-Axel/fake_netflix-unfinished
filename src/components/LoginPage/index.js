import './styles.css';
import backgroundImg from '../../assets/images/logged_out_background.jpg';
import LoginForm from './LoginForm';
import Footer from './Footer';
import Header from './Header';
import BackgroundAsImage from '../BackgroundAsImage';

function LoginPage() {
  return (
    <div className="login-page">
      <BackgroundAsImage src={backgroundImg} />
      <div className="login-page__content">
        <Header />
        <LoginForm className="login-page__form" />
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;

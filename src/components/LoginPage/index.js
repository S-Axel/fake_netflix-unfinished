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
      <Header className="login-page__header" />
      <main className="login-page__form-container">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;

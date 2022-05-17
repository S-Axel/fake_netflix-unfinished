import './styles.css';
import backgroundImg from '../../assets/images/logged_out_background.jpg';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import BackgroundAsImage from '../../components/BackgroundAsImage';

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

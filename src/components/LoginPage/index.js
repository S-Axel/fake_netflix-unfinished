import './styles.css';
import backgroundImg from '../../assets/images/logged_out_background.jpg';
import LoginFormContainer from '../../containers/LoginForm';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
import BackgroundAsImage from '../BackgroundAsImage';

/**
 * @category Components
 * @subcategory Pages
 *
 * @component
 */
function LoginPage() {
  return (
    <div className="login-page">
      <BackgroundAsImage src={backgroundImg} />
      <div className="login-page__content">
        <LoginHeader />
        <LoginFormContainer className="login-page__form" />
        <LoginFooter />
      </div>
    </div>
  );
}

export default LoginPage;

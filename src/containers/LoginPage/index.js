import { Link } from 'react-router-dom';

import LogoNetflix from '../../components/LogoNetflix';

function LoginPage() {
  return (
    <div>
      <header>
        <Link to="/">
          <LogoNetflix />
        </Link>
      </header>
    </div>
  );
}

export default LoginPage;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../store/store';
import LoginPage from '../LoginPage';
import BrowsePage from '../BrowsePage';
import AuthRestricted from '../../containers/AuthRestricted';
import AuthInit from '../../containers/AuthInit';
import AuthLogout from '../../containers/AuthLogout';

/**
 * Root of the application
 *
 * @category Components
 * @subcategory Global
 *
 * @component
 */
function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <AuthInit />
          <Routes>
            <Route path="/login" element={<AuthRestricted type="guest" element={<LoginPage />} />} />
            <Route path="/browse" element={<AuthRestricted type="connected" element={<BrowsePage />} />} />
            <Route path="/signOut" element={<AuthRestricted type="connected" element={<AuthLogout />} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
}

export default App;

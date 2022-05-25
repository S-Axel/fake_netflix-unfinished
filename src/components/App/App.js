import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../../store/store';
import LoginPage from '../LoginPage';
import BrowsePage from '../BrowsePage';
import AuthRestricted from '../AuthRestricted';

function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<AuthRestricted type="guest" element={<LoginPage />} />} />
            <Route path="/browse" element={<AuthRestricted type="restricted" element={<BrowsePage />} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
}

export default App;

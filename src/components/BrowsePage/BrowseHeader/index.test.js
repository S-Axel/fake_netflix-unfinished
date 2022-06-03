import { render, screen } from '@testing-library/react';
import BrowseHeader from './index';

const LOGO_NETFLIX = 'LogoNetflix';
const LogoNetflix = () => (LOGO_NETFLIX);
jest.mock('../../LogoNetflix', () => LogoNetflix);

describe('BrowseHeader', () => {
  it('Renders LogoNetflix', () => {
    render(<BrowseHeader />);
    expect(screen.getByText(LOGO_NETFLIX)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import BrowseHeader from './index';

const LOGO_NETFLIX = 'LogoNetflix';
jest.mock('../../LogoNetflix', () => () => <span>{LOGO_NETFLIX}</span>);

const PRIMARY_NAVIGATION = 'PrimaryNavigation';
jest.mock('./PrimaryNavigation', () => () => <span>{PRIMARY_NAVIGATION}</span>);

const SECONDARY_NAVIGATION = 'SecondaryNavigation';
jest.mock('./SecondaryNavigation', () => () => <span>{SECONDARY_NAVIGATION}</span>);

describe('BrowseHeader', () => {
  it('Renders LogoNetflix', () => {
    render(<BrowseHeader />);
    expect(screen.getByText(LOGO_NETFLIX)).toBeInTheDocument();
    expect(screen.getByText(PRIMARY_NAVIGATION)).toBeInTheDocument();
    expect(screen.getByText(SECONDARY_NAVIGATION)).toBeInTheDocument();
  });
});

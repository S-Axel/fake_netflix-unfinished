import { render, screen } from '@testing-library/react';
import AlertStack from './index';

describe('AlertStack', () => {
  it('renders given alerts', () => {
    const alerts = [
      {
        severity: 'error',
        content: 'some alert',
      },
      {
        severity: 'warning',
        content: 'some other alert',
      },
    ];
    render(<AlertStack alerts={alerts} closeAlert={() => {}} />);
    expect(screen.getByText(alerts[0].content)).toBeInTheDocument();
    expect(screen.getByText(alerts[1].content)).toBeInTheDocument();
  });
});

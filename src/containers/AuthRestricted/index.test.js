/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import AuthRestricted from './index';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  __esModule: true,
  Navigate: ({ to }) => (<span>{`Redirected to ${to}`}</span>),
}));

describe('AuthRestricted', () => {
  const cases = [
    {
      describeExpectedResult: 'renders given element',
      connected: false,
      type: 'guest',
      expectInDocument: 'element text',
    },
    {
      describeExpectedResult: 'redirects to browse page',
      connected: true,
      type: 'guest',
      expectInDocument: 'Redirected to /browse',
    },
    {
      describeExpectedResult: 'renders given element',
      connected: true,
      type: 'connected',
      expectInDocument: 'element text',
    },
    {
      describeExpectedResult: 'redirects to login page',
      connected: false,
      type: 'connected',
      expectInDocument: 'Redirected to /login',
    },
  ];

  it.each(cases)(
    '$describeExpectedResult when type is $type and user connected: $connected',
    ({ connected, type, expectInDocument }) => {
      useSelector.mockImplementation(() => connected);
      render(
        <AuthRestricted type={type} element={<p>element text</p>} />,
      );
      expect(screen.getByText(new RegExp(expectInDocument, 'i'))).toBeInTheDocument();
    },
  );
});

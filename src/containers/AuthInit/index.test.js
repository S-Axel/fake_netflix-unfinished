import { render } from '@testing-library/react';
import AuthInit from './index';
import actionUserInit from '../../actions/user/actionUserInit';

jest.mock('../../actions/user/actionUserInit', () => ({
  __esModule: true,
  default: jest.fn(),
}));
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  __esModule: true,
  useDispatch: () => (mockDispatch),
}));

describe('AuthInit', () => {
  it('dispatch actionUserInit', () => {
    actionUserInit.mockImplementation(() => ('actionUserInitReturn'));
    render(<AuthInit />);
    expect(actionUserInit).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith('actionUserInitReturn');
  });
});

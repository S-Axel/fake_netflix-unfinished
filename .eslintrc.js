module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/forbid-prop-types': 'off',
  },
};

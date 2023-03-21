module.exports = {
    extends: [
      'react-app',
      'prettier',
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
    },
  }
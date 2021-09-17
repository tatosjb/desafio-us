module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
  },
}

module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['airbnb'],
  'globals': {
    'Babel': true,
    'React': true
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'jsx-a11y'
  ],
  'rules': {

    'global-require': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'no-new-func': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',

    /* 编程风格 */
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],

    'jsx-a11y/href-no-hash': 2,

    /* react */
    'react/jsx-no-bind': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off'
  }
};

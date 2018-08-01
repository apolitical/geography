module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb-base',
  'plugins': [
    'chai-friendly',
    'flowtype',
    'flow-header',
  ],
  'env': {
    'mocha': true,
    'node': true,
  },
  'rules': {
    'arrow-parens': ['error', 'always'],
    'flow-header/flow-header': 2,
    'function-paren-newline': ['error', 'multiline'],
    'no-console': 0,
    'max-len': ["error", { "code": 120 }],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        '**/*.test.js',
      ],
    }],
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  }
};

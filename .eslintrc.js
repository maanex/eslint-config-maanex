
module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-promise'
  ],
  extends: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] }
    }
  },
  rules: {
    // FROM NUXTJS
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'no-lonely-if': 'error',
    'require-await': 'error',
    'dot-notation': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-useless-rename': 'error',
    
    // FROM NUXTJS TS
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    'no-unused-vars': 'off',

    // CUSTOM
    'no-multiple-empty-lines': [ 'warn', { max: 2, maxEOF: 1 } ],
    'padded-blocks': [ 'error', { classes: 'always' } ],
    'array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false } ],
    'space-before-function-paren': [ 'warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
    'no-console': 'off',
    curly: [ 'warn', 'multi-or-nest', 'consistent' ],
    'operator-linebreak': [ 'warn', 'before' ],
    'promise/param-names': 'off'
  }
}
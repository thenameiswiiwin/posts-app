module.exports = {
  extends: ['proste/typescript.js', 'plugin:vue/vue3-recommended', 'eslint-config-prettier'],
  globals: {
    Vi: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
    extraFileExtensions: ['.vue'],
  },
};

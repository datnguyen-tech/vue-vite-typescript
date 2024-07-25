/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [{
    files: [
      'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
    ],
    'extends': [
      'plugin:playwright/recommended'
    ]
  }],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: [
          ['template', 'script'], 'style'
        ]
      }
    ],
    'vue/no-multiple-template-root': 'off',
    'vue/no-setup-props-destructure': 'off',
    'no-undef': 'off',
    'no-debugger': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
    // 'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
}
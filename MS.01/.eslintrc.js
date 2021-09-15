module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "quotes": "off",
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "@typescript-eslint/no-var-requires" : "error",
    "no-multiple-empty-lines": "off",
    "max-len": ["error", { "code": 125, "ignoreStrings": true, "ignoreComments": true, "ignoreTemplateLiterals": true }],
    "indent": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/member-delimiter-style": ["error", { "multiline": { "delimiter": "comma", "requireLast": true }, "singleline": { "delimiter": "comma", "requireLast": true }, "overrides": { "interface": { "multiline": { "delimiter": "semi", "requireLast": true } } } }],
    // "@typescript-eslint/typedef": [
    //   "error",
    //   {
    //     "call-signature": true,
    //     "arrowParameter": true,
    //     "memberVariableDeclaration": true,
    //     "parameter": true,
    //     "propertyDeclaration": true,
    //     "variableDeclaration": true,
    //   }
    // ]
  }
}
  
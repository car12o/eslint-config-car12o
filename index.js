const { rules, ...airbnbBase } = require('eslint-config-airbnb-base')

module.exports = {
  ...airbnbBase,
  rules: {
    ...rules,
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true, "caughtErrors": "all" }],
    "no-console": 1,
    "max-len": [2, 120],
    "semi": [2, "never"],
    "comma-dangle": [2, "never"],
    "no-underscore-dangle": 0,
    "quotes": [2, "double"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "prefer-object-spread": 2,
    "no-param-reassign": [2, { "props": false }],
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "always"],
    "no-shadow": 0,
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "consistent": true
        },
        "ObjectPattern": {
          "consistent": true
        },
        "ImportDeclaration": {
          "consistent": true
        },
        "ExportDeclaration": {
          "consistent": true
        }
      }
    ],
    "import/prefer-default-export": 0
  }
}

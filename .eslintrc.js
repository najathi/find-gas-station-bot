module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 7,
        "sourceType": "module",
        "allowImportExportEverywhere": true,
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "rules": {
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "no-script-url": ["off"],
        "jsx-a11y/anchor-is-valid": ["off"],
        "jsx-a11y/anchor-has-content": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "react-hooks/exhaustive-deps": ["off"],
        "react-app/react-hooks/exhaustive-deps": ["off"],
        "react-app/anchor-has-content": ["off"],
        "react-app/anchor-is-valid": ["off"],
        "react/no-unescaped-entities": ["off"],
        "no-prototype-builtins": ["off"],
        "no-control-regex": ["off"],
        "react/jsx-no-target-blank": ["off"],
        "no-dupe-keys": ["off"],
        "jsx-a11y/alt-text": ["off"],
        "jsx-a11y/heading-has-content": ["off"],
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};

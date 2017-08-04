module.exports = {
    extends: ['eslint:recommended', 'prettier', "plugin:react/recommended"], // extending recommended config and config derived from eslint-config-prettier
    plugins: [
        'react',
        'prettier',
        'mocha',
    ], // activating esling-plugin-prettier (--fix stuff)
    rules: {
        'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        eqeqeq: ['error', 'always'], // adding some custom ESLint rules
        "mocha/no-exclusive-tests": "error",
    },
    parser: "babel-eslint",
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    },
    "env": {
        "browser": true,
        "mocha": true,
    }
};
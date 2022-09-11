module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte', '*.ts'],
			processor: 'svelte3/svelte3',
			rules: {
				'prettier/prettier': [
					'error',
					{
						singleQuote: false
					}
				],
				indent: ['error', 'tab', { SwitchCase: 1, MemberExpression: 'off' }],
				quotes: ['error', 'double'],
				semi: ['error', 'always'],
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-unused-vars': 'off'
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};

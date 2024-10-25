import react from 'eslint-plugin-react'
import tailwind from 'eslint-plugin-tailwindcss'
import prettier from 'eslint-config-prettier'

export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...tailwind.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/prop-types': 'off',
      'tailwind/no-custom-classname': 'off',
    },
  },
]

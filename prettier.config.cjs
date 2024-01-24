/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-packagejson'),
  ],
};

module.exports = config;

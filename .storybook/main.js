module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },
}

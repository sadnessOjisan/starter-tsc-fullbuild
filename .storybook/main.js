module.exports = {
  stories: ["../src/**/__stories__/*.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links/register","@storybook/addon-knobs/register"],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        },
        // Optional
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};

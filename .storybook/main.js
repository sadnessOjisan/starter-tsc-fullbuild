module.exports = {
  stories: ["../src/**/__stories__/*.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  }
};

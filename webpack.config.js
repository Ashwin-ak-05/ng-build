const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfe1',  // Name of your micro-frontend

  exposes: {
    // Exposing a standalone component instead of a module
    './Component': './src/app/app.component.ts', // Path to the standalone component
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});

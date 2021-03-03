module.exports = {
  apps: [
    {
      name: 'server',
      script: 'index.js',
      instance: 'max',
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
    },
  ],
};

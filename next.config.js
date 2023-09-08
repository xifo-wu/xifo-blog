/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.js.map$/,
        loader: 'ignore-loader',
      },
      {
        test: /fsevents\.node$/,
        loader: 'ignore-loader',
      },
    );

    config.ignoreWarnings = [
      {
        module: /node_modules\/hexo\/lib\/hexo\/index.js/,
      },
      {
        module: /node_modules\/chokidar\/lib\/.*/,
      },
      {
        module: /node_modules\/nunjucks\/src\/node-loaders\.js/,
      },
      {
        module: /node_modules\/prismjs\/components\/index\.js/,
      },
      {
        file: /node_modules\/hexo\/lib\/hexo\/index\. js/,
      },
    ];

    return config;
  },
};

module.exports = nextConfig;

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  paths: function (paths) {
    paths.appBuild = path.resolve("../dist", ''); // Замените на желаемую директорию
    return paths;
  },
  webpack: function (config) {
    // Убираем хэши из имен файлов JS
    config.output.filename = 'main.js'; // Имя для основного JS-файла
    config.output.chunkFilename = '[name].chunk.js'; // Имя для чанков
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false, // Отключаем разделение чанков
      },
    };
    config.optimization.runtimeChunk = false; // Отключаем runtime-чанк

    // Убираем хэши из имен CSS-файлов
    config.plugins.forEach(plugin => {
      if (plugin instanceof MiniCssExtractPlugin) {
        plugin.options.filename = 'main.css'; // Основной CSS-файл
        plugin.options.chunkFilename = '[name].chunk.css'; // Чанки CSS
      }
    });

    return config;
  },
};

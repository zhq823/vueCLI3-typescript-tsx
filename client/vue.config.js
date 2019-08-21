module.exports = {
  outputDir: '../public',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/auth': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/version': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'http://localhost:4100',
        changeOrigin: true,
        ws: true
      }
    }
  }
};

export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://d2xfqyfa5d8vcc.cloudfront.net',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        logLevel: 'debug', // Для отладки
      },
    },
  },
};
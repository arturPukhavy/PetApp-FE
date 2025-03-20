module.exports = {
    server: {
      proxy: {
        '/api': {
          target: 'https://d2xfqyfa5d8vcc.cloudfront.net',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: true,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              console.log('Proxying request:', proxyReq.path);
            });
            proxy.on('proxyRes', (proxyRes) => {
              console.log('Received response:', proxyRes.statusCode);
            });
          },
        },
      },
    },
  };
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/wordfeusk/" : "/",
};

// module.exports = {
//   pwa: {
//     name: 'BDFI',
//     themeColor: '#2d3748',
//     msTileColor: '#2d3748',
//     appleMobileWebAppCapable: 'no',
//     appleMobileWebAppStatusBarStyle: 'default',
//     // manifestPath: 'manifest.json',
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//         // swSrc is required in InjectManifest mode.
//         swSrc: 'service-worker.js',
//         // ...other Workbox options...
//         exclude: [/_redirects/],
//     }
// }
// };
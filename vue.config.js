const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/wordfeusk/" : "/",
};

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'WordFeusk', // <---- this is PWA name
  }
}


module.exports = {
  pwa: {
    name: 'WordFeusk',
    themeColor: '#2d3748',
    msTileColor: '#2d3748',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestPath: 'dist/manifest.json',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        // swSrc: 'dist/service-worker.js',
        // ...other Workbox options...
        exclude: [/_redirects/],
    }
}
};
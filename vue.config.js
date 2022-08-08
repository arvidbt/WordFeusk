const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/wordfeusk/" : "/",
};

// module.exports = {
//   pwa: {
//     name: "WordFeusk",
//     themeColor: "#B9DEFE"
//   }
// };
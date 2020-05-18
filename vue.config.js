module.exports = {
  lintOnSave: true,
  publicPath: '/profile/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
}

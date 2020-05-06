/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:53:59
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-30 13:20:35
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 */
module.exports = {
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify", "vue-echarts", "resize-detector"],
};

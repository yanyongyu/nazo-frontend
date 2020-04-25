/*
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:46:01
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-25 14:53:49
 * @Description    : Vuetify Config
 * @GitHub         : https://github.com/yanyongyu
 */
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: colors.grey.lighten2,
      },
    },
  },
  icons: {
    iconfont: "fa",
    values: {
      html5: "fab fa-html5",
    },
  },
});

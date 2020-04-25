<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:48:16
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-25 15:01:30
 * @Description    : Main Frame
 * @GitHub         : https://github.com/yanyongyu
 -->
<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-app-bar class="hidden-xs-only" app color="transparent" dense flat>
      <v-toolbar-title>Nazo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn to="/" text exact>
          <v-icon left>fa-home</v-icon>Home
        </v-btn>
        <v-btn to="/rank" text>
          <v-icon left>fa-chart-bar</v-icon>Rank
        </v-btn>
        <v-btn v-if="token" text @click="logout">
          <v-icon left>fa-sign-out-alt</v-icon>Logout
        </v-btn>
        <v-btn v-else text to="/login">
          <v-icon left>fa-sign-in-alt</v-icon>Login
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-app-bar class="hidden-sm-and-up" app color="transparent" dense flat>
      <v-toolbar-title>Nazo</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary right disable-resize-watcher>
      <v-list nav>
        <v-list-item link exact to="/">
          <v-list-item-icon>
            <v-icon>fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/rank">
          <v-list-item-icon>
            <v-icon>fa-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Rank</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="token" link @click="logout">
          <v-list-item-icon>
            <v-icon>fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else link to="/login">
          <v-list-item-icon>
            <v-icon>fa-sign-in-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>

    <v-footer app absolute color="transparent" padless>
      <v-container class="pa-0">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="auto">
            <span>
              <v-icon small left>$html5</v-icon>沪ICP备19021282
            </span>
          </v-col>
          <v-col class="text-center" cols="auto">
            <span>
              <v-icon small left>fa-copyright</v-icon>2020-2020 低调
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false
  }),
  computed: {
    token: function() {
      return this.$store.state.token;
    }
  },
  methods: {
    logout: function() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style scoped>
footer span {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:48:16
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-30 12:57:51
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

    <v-navigation-drawer v-model="drawer" app temporary right>
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
      <v-menu
        v-model="dashboard"
        top
        nudge-bottom="-60"
        nudge-width="500"
        :close-on-content-click="false"
        transition="slide-y-reverse-transition"
      >
        <template v-slot:activator="{on}">
          <v-fab-transition>
            <v-btn v-show="token" color="blue darken-2" absolute bottom right dark fab v-on="on">
              <v-icon v-if="dashboard">fa-times</v-icon>
              <v-icon v-else>fa-list-ul</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-card class="elevation-12" :loading="loading">
          <v-toolbar flat>
            <v-toolbar-title>Status - {{username}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="throttledRefreshState">
              <v-icon>fa-sync-alt</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text>
            <v-row no-gutters dense>
              <v-col cols="12" md="6" dense>
                <v-list dense shaped>
                  <v-subheader>Rank</v-subheader>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon small left color="yellow darken-1">fa-trophy</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{rank[0]}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon small left color="grey lighten-1">fa-trophy</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{rank[1]}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon small left color="brown lighten-1">fa-trophy</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{rank[2]}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="6" dense>
                <v-list dense shaped>
                  <v-subheader>Puzzles</v-subheader>
                  <v-list-item
                    v-for="(item, index) in status"
                    :key="index"
                    link
                    :to="item.path"
                    :disabled="item.status == 'disabled'"
                  >
                    <v-list-item-icon>
                      <v-icon small left color="green" v-if="item.status == 'passed'">$check</v-icon>
                      <v-icon small left v-else>$circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{item.meta.title}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-menu>
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
import _ from "lodash";
import Puzzles from "@/components/puzzles.js";

export default {
  name: "App",

  data: () => ({
    drawer: false, // 手机侧边栏
    dashboard: false, // 题目概览
    loading: false,
    rank: ["Loading...", "Loading...", "Loading..."]
  }),
  computed: {
    username: function() {
      return this.$store.state.username;
    },
    token: function() {
      if (this.$store.state.token) {
        _.delay(this.loadUserData, 0);
      }
      return this.$store.state.token;
    },
    status: function() {
      var tmp = [];
      var that = this;
      Puzzles.forEach((value, index) => {
        if (that.$store.state.puzzles[index] || false) {
          tmp.push({ status: "passed", ...value });
        } else if (index == that.$store.state.puzzleIndex) {
          tmp.push({ status: "current", ...value });
        } else {
          tmp.push({ status: "disabled", ...value });
        }
      });
      return tmp;
    }
  },
  created() {
    this.throttledRefreshState = _.throttle(this.loadUserData, 3000);
  },
  methods: {
    login: function() {
      if (this.$cookies.isKey("access_token")) {
        this.$store.commit("login", {
          access_token: this.$cookies.get("access_token"),
          token_type: "Bearer"
        });
      }
    },
    logout: function() {
      this.$cookies.remove("access_token");
      this.$store.commit("logout");
    },
    loadUserData: function() {
      this.dashboard = true;
      this.loading = true;
      this.$axios
        .get("/api/state")
        .then(res => {
          if (res.status == 200) {
            this.rank = [
              res.data.rank.first,
              res.data.rank.second,
              res.data.rank.third
            ];
            this.$store.commit("restoreState", res.data.user);
          } else {
            this.$toastr.error("", "加载用户数据失败!");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toastr.error("", "加载用户数据失败!");
        })
        .then(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.login();
  }
};
</script>

<style scoped>
footer span {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

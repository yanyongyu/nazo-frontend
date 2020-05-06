<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-29 14:04:56
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-30 16:56:24
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 -->

<template>
  <v-container class="fill-height align-start">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="elevation-5" :loading="loading">
          <v-toolbar flat>
            <v-toolbar-title>Rank</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="throttledRefreshRank">
              <v-icon>fa-sync-alt</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-list dense shaped>
                  <v-list-item v-for="(item, index) in rank" :key="index">
                    <v-list-item-icon>
                      <v-icon v-if="index === 0" small left color="yellow darken-1">fa-trophy</v-icon>
                      <v-icon v-else-if="index === 1" small left color="grey lighten-1">fa-trophy</v-icon>
                      <v-icon v-else-if="index === 2" small left color="brown lighten-1">fa-trophy</v-icon>
                      <v-icon v-else small left>fa-trophy</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{item.username}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="8">
                <div class="echarts">
                  <v-chart :options="options" theme="shine" autoresize></v-chart>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
// import "echarts/lib/component/dataZoom";
import "echarts/theme/shine";

export default {
  name: "Rank",
  components: {
    "v-chart": ECharts
  },
  data: () => ({
    loading: false,
    rank: [
      {
        username: "xxx",
        register: "",
        current: 3,
        puzzle_1: ""
      },
      {
        username: "xxx",
        register: "",
        current: 3,
        puzzle_1: ""
      },
      {
        username: "xxx",
        register: "",
        current: 3,
        puzzle_1: ""
      },
      {
        username: "xxx",
        register: "",
        current: 3,
        puzzle_1: ""
      }
    ]
  }),
  computed: {
    rankData: function() {
      var tmp = [];
      this.rank.forEach(value => {
        let tmp_data = [[value.register_time, 0]];
        for (let i = 1; i <= value.current; i++) {
          tmp_data.push([value[`puzzle_${i}`], i]);
        }
        tmp_data.push([new Date().getTime(), value.current]);
        tmp.push({
          name: value.username,
          type: "line",
          symbol: "none",
          data: tmp_data
        });
      });
      return tmp;
    },
    options: function() {
      return {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          orient: "vertical",
          y: "top",
          top: "5%",
          left: "right"
        },
        // toolbox: {
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: "none"
        //     },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "time",
          min: value => {
            return value.min - 3600000;
          },
          max: () => {
            return new Date().getTime();
          }
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 10
        },
        // dataZoom: [
        //   {
        //     type: "inside"
        //   },
        //   {
        //     type: "slider",
        //     handleIcon:
        //       "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        //     handleSize: "80%",
        //     handleStyle: {
        //       color: "#fff",
        //       shadowBlur: 3,
        //       shadowColor: "rgba(0, 0, 0, 0.6)",
        //       shadowOffsetX: 2,
        //       shadowOffsetY: 2
        //     }
        //   }
        // ],
        series: this.rankData
      };
    }
  },
  methods: {
    loadRankData: function() {
      this.loading = true;
      this.$axios
        .get("/api/rank")
        .then(res => {
          if (res.status === 200) {
            this.rank = res.data.rank;
          } else {
            console.log(res.data.detail);
            this.$toastr.error("", "加载排行榜失败!");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toastr.error("", "加载排行榜失败!");
        })
        .then(() => {
          this.loading = false;
        });
    }
  },
  created() {
    this.throttledRefreshRank = _.throttle(this.loadRankData, 3000);
  },
  mounted() {
    this.loadRankData();
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 450px;
}
</style>

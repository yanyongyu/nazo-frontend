<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:46:24
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-30 12:28:32
 * @Description    : Home
 * @GitHub         : https://github.com/yanyongyu
 -->
<template>
  <v-container class="fill-height align-start">
    <v-row>
      <v-col class="text-center">
        <p class="font-weight-light">Lv.0</p>
        <h1 class="font-weight-regular">谜</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center mb-12">
        <h1 class="mb-3">欢迎来到谜之世界!</h1>
        <p>这是一个极客的世界</p>
        <p>Tips: 使用电脑闯关效果更佳</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form ref="form">
          <v-toolbar color="transparent">
            <v-text-field
              class="mr-2"
              label="Your Answer"
              hide-details
              name="answer"
              type="text"
              value="Start"
            ></v-text-field>
            <v-btn color="primary" dark @click="start">GO</v-btn>
          </v-toolbar>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    start: function() {
      this.$router.push(`/${this.$store.state.puzzleIndex + 1}`);
    }
  }
};
</script>

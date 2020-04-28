<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-20 11:46:24
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-28 15:38:29
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
        <h1 class="mb-3">欢迎来到谜之世界！</h1>
        <p>这是一个极客的世界</p>
        <p>Tips: 使用电脑闯关效果更佳</p>
        <v-btn class="ma-2 white--text" color="blue-grey" to="/1">
          Get Started
          <v-icon right dark>fa-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

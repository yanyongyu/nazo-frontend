<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-25 15:10:33
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-28 12:43:57
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 -->
<template>
  <v-container class="fill-height align-start">
    <v-row>
      <v-col class="text-center">
        <p class="font-weight-light">Lv.4</p>
        <h1 class="font-weight-regular">色彩</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center mb-12">
        <p class="font-weight-light"></p>
        <h1 class="mb-3"></h1>
        <p></p>
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
              :rules="[rules.required]"
              v-model="answer"
            ></v-text-field>
            <v-btn color="primary" dark @click="commit">GO</v-btn>
          </v-toolbar>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Lv4",
  data: () => ({
    answer: "",
    rules: {
      required: value => !!value || "Required."
    }
  }),
  methods: {
    commit: function() {
      if (this.$refs.form.validate()) {
        // TODO: commit answer
      }
    }
  }
};
</script>
<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-30 17:55:38
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-05-06 12:56:34
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 -->
<template>
  <v-container class="fill-height align-start">
    <v-row>
      <v-col class="text-center">
        <p class="font-weight-light">Lv.10</p>
        <h1 class="font-weight-regular">随机</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="text-center mb-12">
        <p class="font-weight-light">不如交给cpu?</p>
        <h1 class="mb-3">ntz: chrext cqbcvhvqvhmk jhegtd</h1>
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
            <v-btn color="primary" :loading="loading" dark @click="commit">GO</v-btn>
          </v-toolbar>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Lv11",
  data: () => ({
    answer: "",
    loading: false,
    rules: {
      required: value => !!value || "Required."
    }
  }),
  methods: {
    commit: function() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$axios
          .post("/api/puzzle/11", {
            answer: this.answer
          })
          .then(res => {
            if (res.status == 200) {
              if (res.data.passed) {
                this.$toastr.success("", "恭喜通过Lv.11!");
                this.$store.commit("passedPuzzle");
                this.$router.push("/12");
              } else {
                this.$toastr.error("", "Ops, 答案错了哦!");
              }
            } else {
              console.log(res.data.detail);
              this.$toastr.error("", "Ops, 连接出了点意外!");
            }
          })
          .catch(err => {
            console.log(err);
            this.$toastr.error("", "Ops, 连接出了点意外!");
          })
          .then(() => {
            this.loading = false;
          });
      }
    }
  }
};
</script>
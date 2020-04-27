<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-21 10:43:27
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-27 12:08:30
 * @Description    : None
 * @GitHub         : https://github.com/yanyongyu
 -->
<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Nickname"
                name="username"
                prepend-icon="fa-user"
                :rules="[rules.required, rules.max]"
                hint="初次登录即完成注册"
                persistent-hint
                type="text"
                clearable
                counter="12"
                v-model="username"
              />
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="fa-lock"
                :append-icon="showPassword ? 'fa-eye':'fa-eye-slash'"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
                hint="At least 8 characters"
                counter
                v-model="password"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :loading="loading" :disabled="loading" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import qs from "qs";
import "toastr/build/toastr.css";
import toastr from "toastr";
toastr.options.closeButton = true;

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    loading: false,
    showPassword: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      max: v => v.length <= 12 || "Max 12 characters"
    }
  }),
  methods: {
    login: function() {
      this.loading = true;
      this.$axios
        .post(
          "/api/login",
          qs.stringify(
            {
              username: this.username,
              password: this.password
            },
            {
              indices: false
            }
          ),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            this.$store.commit("login", res.data);
            toastr.success("", "登录成功！");
            this.$router.push("/");
          } else {
            toastr.error(res.data.detail, "登录失败！");
          }
        })
        .catch(err => {
          console.log(err);
          toastr.error("", "登录失败！");
        })
        .then(() => {
          this.loading = false;
        });
    }
  }
};
</script>

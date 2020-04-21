<!--
 * @Author         : yanyongyu
 * @Date           : 2020-04-21 10:43:27
 * @LastEditors    : yanyongyu
 * @LastEditTime   : 2020-04-21 11:16:39
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
                name="name"
                prepend-icon="fa-user"
                hint="初次登录即完成注册"
                persistent-hint
                type="text"
                clearable
              />
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="fa-lock"
                type="password"
                clearable
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
export default {
  name: "Login",
  data: () => ({
    name: "",
    password: "",
    loading: false
  }),
  methods: {
    login: function() {
      this.loading = true;
      // TODO: Login
    }
  }
};
</script>

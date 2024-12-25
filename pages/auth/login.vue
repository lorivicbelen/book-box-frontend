<template>
  <div>
    <section id="login" class="login-section section-m-y">
      <div class="section-wrapper p-x">
        <div class="section-content">
          <p class="section-ttl">Login</p>
          <div class="max-w-600 m-x-auto">
            <form @submit="login">
              <div>
                <label for="email">Email:</label>
                <input type="text" v-model="newAccount.email" id="email" />
              </div>
              <div>
                <label for="password">Password:</label>
                <input
                  type="text"
                  v-model="newAccount.password"
                  id="password"
                />
              </div>
              <button class="btn btn-blue">Login</button>
            </form>
            <p>Create account? <NuxtLink to="/auth/login">Register</NuxtLink></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newAccount: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/login",
          this.newAccount
        );
        console.log(resp);
      } catch (error) {
        console.log("ERROR", error);
      }
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #d4d4d4;
  padding: 30px;
}

form input,
form select {
  border-bottom: 1px solid rgb(0, 0, 0, 0.87);
  padding: 10px;
}

form textarea {
  border: 1px solid #000;
  padding: 10px;
  vertical-align: bottom;
  margin: 10px 0 0 0;
}

form input:focus-visible,
form textarea:focus-visible .v-input__control {
  outline: none;
  border-bottom: 2px solid #000;
}
</style>

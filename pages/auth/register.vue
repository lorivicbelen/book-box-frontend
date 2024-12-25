<template>
  <div>
    <section id="register" class="register-section section-m-y">
      <div class="section-wrapper p-x">
        <div class="section-content">
          <p class="section-ttl">Register</p>
          <div class="max-w-600 m-x-auto">
            <form @submit="register">
              <div>
                <label for="name">Name:</label>
                <input type="text" v-model="newAccount.name" id="name" />
              </div>
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
              <div>
                <label for="password_confirmation">Confirm password:</label>
                <input
                  type="text"
                  v-model="newAccount.password_confirmation"
                  id="password_confirmation"
                />
              </div>
              <button class="btn btn-blue">Register</button>
            </form>
            <p>
              Already have an account? <NuxtLink to="/auth/login">Login</NuxtLink>
            </p>
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
    async register() {
      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/register",
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

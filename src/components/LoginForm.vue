<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="submitLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="credentials.username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="credentials.password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submitLogin() {
      console.log('Login attempt with:', this.credentials);
      // Aquí iría la lógica para autenticar al usuario
    }
  }
}
</script>

<style scoped>
  .login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<template>
    <div class="login-container">
      <div class="login-box">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter


const email = ref('');
const password = ref('');
const errorMessage = ref('');

const correctEmail = 'hizola@hizola.com';
const correctPassword = 'portfolio';

const router = useRouter(); // Create a router instance

const login = () => {
  if (email.value === correctEmail && password.value === correctPassword) {
    console.log('Login successful!');
    errorMessage.value = ''; // Clear any previous error message
    router.push('/dashboard/profile'); // Redirect to the profile page
  } else {
    errorMessage.value = 'Invalid email or password. Please try again.';
  }
};
</script>

<style scoped>
/* Full-page background with pixel art */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/pixel_background.webp'); /* Reference your pixel art image here */
  background-size: full;  /* Ensures the image covers the entire background */
  background-position: center; /* Centers the image */
}

.login-box {
  background-color: rgb(5, 5, 5);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>

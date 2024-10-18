<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Sign in to Hizola's Portfolio</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="email">Email address</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Sign in</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
      <p class="forgot-password"><a href="#">Forgot password?</a></p>
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
html, body {
  height: 100%; /* Ensure the HTML and body take the full height of the viewport */
  margin: 0; /* Remove default margin */
  overflow: hidden; /* Prevent scrolling */
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure it takes full viewport height */
  background: url('/src/assets/tenor.gif') no-repeat center center fixed; /* Direct link to a GIF */
  background-size: cover; /* Make the background cover the whole area */
}

.login-box {
  background-color: rgba(30, 30, 30, 0.9); /* Dark background with slight transparency */
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  width: 400px; /* Wider to match GitHub's layout */
  text-align: center;
  /* Remove margin-top to prevent pushing down the box */
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #ffffff; /* White text color for header */
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #cccccc; /* Light gray color for labels */
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #444; /* Dark border */
  border-radius: 4px;
  background-color: #333; /* Dark input background */
  color: #ffffff; /* White text for input */
  font-size: 0.875rem;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #28a745; /* Green color for buttons */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
}

button:hover {
  background-color: #218838; /* Darker green on hover */
}

.error {
  color: #ff4d4d; /* Red color for error messages */
  margin-top: 1rem;
  font-size: 0.875rem;
}

.forgot-password {
  margin-top: 1rem;
  font-size: 0.875rem;
}

.forgot-password a {
  color: #ffffff; /* White color for links */
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

</style>

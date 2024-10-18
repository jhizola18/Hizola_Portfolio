<template>
  <div id="app">
    <router-view />
    <FooterPage /> <!-- Include the footer here -->
  </div>
</template>

<script>
import FooterPage from './components/FooterPage.vue'; // Adjust the path as needed

export default {
  name: 'App',
  components: {
    FooterPage, // Register the footer component
  },
};
</script>

<style>
html, body {
  height: 100%; /* Ensure the HTML and body take the full height of the viewport */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  background-color: #000000; /* Optional: Set the background color to black or any desired color */
  background-image: url('@/assets/armoredcorebc.webp'); /* Background image for the entire app */
  background-size: cover; /* Cover the entire page */
  background-repeat: no-repeat; /* Prevent the background from repeating */
  background-position: center; /* Center the background image */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex; /* Allow the layout to flex */
  flex-direction: column; /* Allow the footer to stay at the bottom */
  min-height: 100vh; /* Ensure full height */
  color: #110f0f; /* Optional: set default text color for readability */
}

footer {
  margin-top: auto; /* Push footer to the bottom */
}
</style>

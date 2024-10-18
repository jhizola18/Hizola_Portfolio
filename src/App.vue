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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh; /* Ensure full height */
  display: flex;
  flex-direction: column; /* Allow the footer to stay at the bottom */
}

footer {
  margin-top: auto; /* Push footer to the bottom */
}
</style>

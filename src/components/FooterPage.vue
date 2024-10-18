<template>
  <footer class="footer">
    <p>&copy; 2024 Justine Hizola. All rights reserved.</p>
    <nav class="footer-nav">

    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.footer-nav {
  margin-top: 0.5rem;
}

.footer-nav ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.footer-nav li {
  display: inline; /* Display items inline */
  margin: 0 1rem; /* Add some space between items */
}

.footer-nav a {
  color: white; /* White color for links */
  text-decoration: none; /* Remove underline from links */
}

.footer-nav a:hover {
  text-decoration: underline; /* Underline links on hover */
}
</style>

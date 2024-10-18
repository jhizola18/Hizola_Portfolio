<template>
  <div class="contact-page">
    <h2>Contact Me</h2>
    <p>If you'd like to get in touch, you can reach me through the following channels:</p>
    <ul class="contact-list">
      <li>
        <strong>Email:</strong>
        <a href="mailto:hizolajustine18@gmail.com">hizolajustine18@gmail.com</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>
        <a href="linkedin.com/in/hizolajustine18" target="_blank">linkedin.com/in/hizolajustine18</a>
      </li>
      <li>
        <strong>GitHub:</strong>
        <a href="https://github.com/jhizola18" target="_blank">https://github.com/jhizola18</a>
      </li>
      <li>
        <strong>Phone:</strong>
        <a href="tel:09266563088">09266563088</a>
      </li>
      <li>
        <strong>Address:</strong>
        <p>Camella Homes, Poblacion Muntinlupa City</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  background-color: #f4f4f4; /* Light background for better contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.contact-list {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

.contact-list li {
  margin-bottom: 15px; /* Space between list items */
  font-size: 1.1rem; /* Slightly larger text for readability */
}

.contact-list a {
  color: #007bff; /* Link color */
  text-decoration: none; /* Remove underline */
}

.contact-list a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

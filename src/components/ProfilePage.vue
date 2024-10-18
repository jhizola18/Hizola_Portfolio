<template>
  <div class="about-me">
    <h1>About Me</h1>
    <div class="profile-section">
      <div class="profile-info">
        <div class="info-group">
          <p>
            {{ biography }}
          </p>
        </div>

        <div class="info-group" v-if="resumeFile">
          <p>
            <strong>Here is my Resume:</strong> 
            <a :href="resumeUrl" target="_blank">{{ resumeFile.name }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for demonstration
const biography = ref('Hello! I’m Justine, a dedicated 4th-year Computer Engineering student at the Technological Institute of the Philippines. I have a strong foundation in programming languages such as C/C++, C#, and Java, complemented by proficiency in tools like Git and MySQL. My passion for game development has led me to explore Game Programming, where I’m currently honing my skills through personal projects. I am committed to continuously improving as a game programmer and am excited about the possibilities that lie ahead in the world of technology and gaming.');

const resumeFile = ref(new File(["dummy content"], "Hizola_Justine_CV.pdf")); // Dummy file for demonstration
const resumeUrl = ref('/Hizola_Justine_CV.pdf'); // URL to your resume file in the public directory
</script>

<style scoped>

/* Add these styles to your global CSS or main styles file */
html, body {
  margin: 0; /* Remove default margin */
  height: 100%; /* Make sure html and body take full height */
  
}


.about-me {
 
  display: flex; /* Add flex display */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center content horizontally */
  background-color: BLACK;
  background-size: cover; /* Cover the entire section */
  background-repeat: no-repeat; /* Prevent the background from repeating */
  background-position: center; /* Center the background image */
  color: #131212; /* Light gray text color */
}


h1 {
  color: #181616; /* Light gray heading color */
  margin: 0; /* Reset margin */
 
  text-align: center; /* Center the heading text */
  
}

/* Flex container for profile info */
.profile-section {
  display: flex;
  justify-content: center; /* Center horizontally */
  color: rgb(2, 2, 2);
}

/* Profile information styling */
.profile-info {
  max-width: 600px; /* Limit the width */
  text-align: justify; /* Align text to justify */
  padding: 0; /* Remove any padding */
}

.info-group {
  margin-bottom: 1.5rem;
  background-color: NONE;
}

.info-group p {
  font-size: 1rem;
  line-height: 1.5;
}

a {
  color: #66ccff; /* Light blue for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

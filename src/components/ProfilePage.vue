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
            <strong>Here is my Resume:</strong> <a :href="resumeUrl" target="_blank">{{ resumeFile.name }}</a>
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
/* Style for the body and general layout */
body {
  background-color: #2e2e2e; /* Dark gray background for the entire website */
  color: white; /* White text color for readability */
  font-family: Arial, sans-serif; /* Optional: set a font for consistency */
  margin: 0; /* Remove default margin */
  padding: 0;
}

/* Style for the About Me section */
.about-me {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center content horizontally */
  padding: 0px; /* Add padding for space */
}

h1 {
  margin-left: -600px; /* Center the heading */
  color: #1c1f1c; /* Accent color for the heading */
  margin-bottom: 1.5rem;
  margin-top: 50px;
}

/* Flex container for profile info */
.profile-section {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  padding: 20px;
}

/* Style for the profile information */
.profile-info {
  max-width: 600px; /* Limit the width of the text content */
  text-align: justify; /* Align the text to the center */
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>

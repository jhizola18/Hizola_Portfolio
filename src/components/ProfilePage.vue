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
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none; /* Remove background color */
  padding: 50px;
  height: auto; /* Adjust height to fit content */
  color: white; /* Light text for contrast */
}

h1 {
  color: #fff; /* White heading for better visibility */
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
}

.profile-section {
  padding: 30px;
  border-radius: 10px; /* Optional: Rounded corners */
  max-width: 800px;
  width: 100%;
  background: none; /* No background */
}

.profile-info {
  text-align: justify;
  color: #e0e0e0; /* Light gray for readability */
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group p {
  font-size: 1.1rem;
  line-height: 1.7;
}

a {
  color: #66ccff; /* Light blue for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

<template>
  <div class="about-me">
    <h1>About Me</h1>
    <div class="profile-section">
      <div class="profile-info">
        <div class="info-group">
          <h2>Biography</h2>
          <p>{{ biography }}</p>
        </div>

        <div class="info-group">
          <h2>Skills</h2>
          <p>{{ skills }}</p>
        </div>

        <div class="info-group" v-if="resumeFile">
          <h2>Resume</h2>
          <p>{{ resumeFile.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Sample data for demonstration
const biography = ref('I am a 4th year Computer Engineering Student...');
const skills = ref('C/C++, C#, Java, Git, MySQL, Unreal Engine');
const resumeFile = ref(new File(["dummy content"], "Justine_Hizola_Resume.pdf")); // Dummy file for demonstration
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
  text-align: center; /* Align the text to the center */
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group h2 {
  font-size: 1.2rem;
  color: #4CAF50; /* Accent color */
  
}

.info-group p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>

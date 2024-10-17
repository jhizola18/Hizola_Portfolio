<template>
  <div class="profile-container">
    <h1>Profile Page</h1>
    <div class="profile-info">
      <div class="input-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" placeholder="Justine Hizola" />
      </div>

      <div class="input-group">
        <label for="biography">Biography:</label>
        <textarea id="biography" v-model="biography" placeholder="Game Developer"></textarea>
      </div>

      <div class="input-group">
        <label for="resume">Upload Resume:</label>
        <input type="file" id="resume" @change="handleFileUpload" />
      </div>
    </div>

    <button @click="submitProfile">Submit</button>

    <div class="profile-preview" v-if="submitted">
      <h2>Profile Preview</h2>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Biography:</strong> {{ biography }}</p>
      <p v-if="resumeFile"><strong>Resume:</strong> {{ resumeFile.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const biography = ref('');
const resumeFile = ref(null);
const submitted = ref(false);

const handleFileUpload = (event) => {
  resumeFile.value = event.target.files[0];
};

const submitProfile = () => {
  // You can implement further submission logic here
  submitted.value = true;
};
</script>

<style scoped>
.profile-container {
  background-color: #2e2e2e; /* Dark gray background */
  color: white; /* White text color */
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
}

input[type="file"] {
  padding: 0.5rem;
}

textarea {
  height: 100px;
  resize: none;
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

.profile-preview {
  margin-top: 2rem;
  background-color: #444; /* Slightly lighter gray for preview */
  padding: 1rem;
  border-radius: 4px;
}
</style>

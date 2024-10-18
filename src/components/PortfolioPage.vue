<template>
  <div>
    <h2>My Personal Projects</h2>
    <p></p>
    <div class="portfolio-items">
      <div v-for="repo in starredRepositories" :key="repo.id" class="portfolio-item">
        <img :src="getRepoImage(repo.name)" alt="Project Image" class="repo-image" />
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank">View on GitHub</a>
        <a v-if="repo.itchUrl" :href="repo.itchUrl" target="_blank" class="itch-link">View on itch.io</a>
      </div>
    </div>
    <div class="itchio-section">
      <h3>Check out my games on itch.io!</h3>
      <a href="https://namelessnames.itch.io" target="_blank">My itch.io Profile</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      repositories: [], // This will hold your GitHub repositories
      starredRepositories: [], // This will hold your starred repositories
      repoImages: { // Manual mapping for repository images
        'Flappy_Bird': require('@/assets/coverbird.png'),
        'SpaceGame': require('@/assets/CoverSpace.png'),
        'Tetris_Raylib': require('@/assets/covertetris.png')
        // Add more repository names and corresponding image URLs here
      },
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/jhizola18/repos');
        const data = await response.json();
        this.repositories = data;

        // Filter repositories to get only starred ones
        this.starredRepositories = this.repositories.filter(repo => repo.stargazers_count > 0);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    },
    getRepoImage(repoName) {
      // Return the image URL for the repository based on its name
      return this.repoImages[repoName] || 'default_image_url'; // Replace with a default image URL if not found
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: -100px; /* Adjust the value to control spacing */
}

.portfolio-items {
  display: grid; /* Use CSS grid for layout */
  grid-template-columns: repeat(2, 0.8fr); /* Adjusted width for each column */
  gap: 5px; /* Reduced space between items for closer spacing */
  margin-left: 380px;
  margin-right: 400px;
}

.portfolio-item {
  background-color: #f9f9f9; /* Light background for the items */
  border: 1px solid #ccc; /* Border around each item */
  padding: 3px; /* Further reduced padding for the item */
  border-radius: 5px; /* Rounded corners */
  text-align: center; /* Center text within the item */
  display: flex; /* Use flexbox to align items */
  flex-direction: column; /* Stack contents vertically */
  justify-content: flex-start; /* Align items to the top */
  margin: auto; /* Center items */
  max-width: 300px; /* Set a maximum width for the items */
}

.repo-image {
  width: 100%; /* Make image responsive */
  height: 200px; /* Set a fixed height for the images */
  border-radius: 5px; /* Optional: rounded corners for the image */
  object-fit: contain; /* Scale the image to fit, maintaining aspect ratio */
}

.itchio-section {
  margin-top: 10px; /* Reduced space above the itch.io section */
  text-align: center; /* Center text */
}

.itch-link {
  margin-top: 5px; /* Reduced space above the itch.io link */
  color: #007bff; /* Change color to indicate it's a link */
  text-decoration: none; /* Remove underline */
}

.itch-link:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

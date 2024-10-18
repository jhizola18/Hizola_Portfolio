<template>
  <div>
    <h2>My Personal Projects</h2>
    <div class="portfolio-items">
      <div v-for="repo in starredRepositories" :key="repo.id" class="portfolio-item">
        <img :src="getRepoImage(repo.name)" alt="Project Image" class="repo-image" />
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank" class="github-link">View on GitHub</a>
        <a v-if="repo.itchUrl" :href="repo.itchUrl" target="_blank" class="itch-link">View on itch.io</a>
      </div>
    </div>
    <div class="itchio-section">
      <h3>Check out my games on itch.io!</h3>
      <a href="https://namelessnames.itch.io" target="_blank" class="itch-profile-link">My itch.io Profile</a>
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
body {
  background-color: #121212; /* Dark background for the entire page */
  color: #1a1616; /* Light gray text color for better contrast */
  margin: 0; /* Remove default margin */
  font-family: Arial, sans-serif; /* Set a default font */
}

h2, h3 {
  color: #1f1717; /* White text color for headings */
}

h2 {
  margin-top: 0; /* Adjust the value to control spacing */
}

.portfolio-items {
  display: grid; /* Use CSS grid for layout */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive columns */
  gap: 10px; /* Space between items */
  padding: 20px; /* Padding around the grid */
  margin-left: 400px;
}

.portfolio-item {
  background-color: #fffcfc; /* Dark background for the items */
  border: 1px solid #080808; /* Darker border around each item */
  padding: 10px; /* Padding for the item */
  border-radius: 5px; /* Rounded corners */
  text-align: center; /* Center text within the item */
  display: flex; /* Use flexbox to align items */
  flex-direction: column; /* Stack contents vertically */
  justify-content: flex-start; /* Align items to the top */
}

.repo-image {
  width: 100%; /* Make image responsive */
  height: 200px; /* Set a fixed height for the images */
  border-radius: 5px; /* Rounded corners for the image */
  object-fit: contain; /* Scale the image to fit, maintaining aspect ratio */
}

.github-link, .itch-link, .itch-profile-link {
  color: #00aaff; /* Lighter blue color for links */
  text-decoration: none; /* Remove underline */
  margin-top: 5px; /* Space above the links */
}

.github-link:hover, .itch-link:hover, .itch-profile-link:hover {
  text-decoration: underline; /* Underline on hover */
}

.itchio-section {
  margin-top: 20px; /* Space above the itch.io section */
  text-align: center; /* Center text */
  color: #0e0d0d; /* Ensure section text color is clear */
}
</style>

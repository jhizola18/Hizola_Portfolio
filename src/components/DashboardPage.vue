<template>
  <div class="dashboard">
    <header class="header-topbar">
      <h1 class="title">Justine Hizola - Game Programmer Portfolio</h1>
      <nav class="topbar">
        <ul>
          <li><router-link to="/dashboard/profile">Profile</router-link></li>
          <li><router-link to="/dashboard/portfolio">Portfolio</router-link></li>
          <li><router-link to="/dashboard/contact">Contact</router-link></li>
          <li><router-link to="/dashboard/creative">Creative</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif; /* Use a modern font for a cohesive look */
}

.header-topbar {
  display: flex;
  flex-direction: column; /* Stack title and topbar vertically */
  background-color: #2e2e2e; /* Unified background color */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.title {
  color: #dce4dc; /* Title color */
  font-size: 2rem;
  margin: 20px 0; /* Adjust margins for spacing */
  text-align: center; /* Center the title */
}

.topbar {
  background: #333; /* Topbar background color */
  color: white;
  padding: 10px;
}

.topbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.topbar ul li {
  margin-bottom: 0;
}

.topbar ul li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px; /* Add padding for clickable area */
  border-radius: 4px; /* Rounded corners */
  transition: background 0.3s ease; /* Smooth transition for hover effect */
}

.topbar ul li a:hover {
  background: #555; /* Background color on hover */
}

.content {
  padding: 20px;
  flex: 1;
  margin-top: 160px; /* Ensure the content starts below the fixed header and topbar */
  background-color: #f4f4f4; /* Light background for content area */
  border-radius: 8px; /* Slightly rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

@media (max-width: 768px) {
  .topbar ul {
    flex-direction: column; /* Stack items on small screens */
    align-items: center; /* Center items */
  }

  .topbar ul li {
    margin: 5px 0; /* Space between stacked items */
  }
}
</style>

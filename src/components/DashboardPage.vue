<template>
  <div class="dashboard">
    <header class="header-topbar">
      <h1 class="title">Justine Hizola - Game Programmer Portfolio</h1>
      <nav class="topbar">
        <ul>
          <li><router-link to="/dashboard/profile">Profile</router-link></li>
          <li><router-link to="/dashboard/portfolio">My Games</router-link></li>
          <li><router-link to="/dashboard/contact">Contact</router-link></li>
          <li><router-link to="/dashboard/creative">Let's Play a Game!</router-link></li>
          <li class="logout"><button @click="logout">Logout</button></li> <!-- Logout button -->
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
  methods: {
    logout() {
      // Implement your logout logic here
      // For example, clearing user data and redirecting to the login page
      console.log('User logged out'); // Replace this with actual logout logic
      this.$router.push('/'); // Redirect to the login page (adjust the route as needed)
    },
  },
};
</script>


<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
}

.header-topbar {
  display: flex;
  flex-direction: column;
  background-color: rgba(46, 46, 46, 0.8); /* Semi-transparent background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.title {
  color: #dce4dc;
  font-size: 2rem;
  margin: 20px 0;
  text-align: center;
}

.topbar {
  background: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
  color: white;
  padding: 10px;
}

.topbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between; /* Adjust to space items evenly */
  align-items: center; /* Center items vertically */
}

.topbar ul li {
  margin-bottom: 0;
}

.topbar ul li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.topbar ul li a:hover {
  background: rgba(85, 85, 85, 0.8); /* Slightly darker on hover */
}

.logout {
  margin-left: auto; /* Push the logout button to the right */
}

.logout button {
  background-color: #e74c3c; /* Red background for the logout button */
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout button:hover {
  background-color: #c0392b; /* Darker red on hover */
}

.content {
  padding: 20px;
  flex: 1;
  margin-top: 160px; /* Ensure content is below the fixed header */
  background-color: rgba(44, 39, 39, 0.8); /* Semi-transparent background for content */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .topbar ul {
    flex-direction: column;
    align-items: center;
  }

  .topbar ul li {
    margin: 5px 0;
  }
}
</style>

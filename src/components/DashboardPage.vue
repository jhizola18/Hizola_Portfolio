<template>
    <div class="dashboard">
      <nav class="sidebar">
        <ul>
          <li><router-link to="/dashboard/profile">Profile</router-link></li>
          <li><router-link to="/dashboard/portfolio">Portfolio</router-link></li>
          <li><router-link to="/dashboard/contact">Contact</router-link></li>
          <li><router-link to="/dashboard/creative">Creative</router-link></li>
        </ul>
      </nav>
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
  }
  .sidebar {
    width: 200px;
    background: #333;
    color: white;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar ul li {
    margin-bottom: 10px;
  }
  .sidebar ul li a {
    color: white;
    text-decoration: none;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>
  
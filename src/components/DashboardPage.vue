<template>
    <div class="dashboard">
      <div class="header">
        <h1 class="title">Justine Hizola's Game Programmer Portfolio</h1>
      </div>
      <nav class="topbar">
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
    flex-direction: column;
  }
  
  .header {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    background-color: #2e2e2e; /* Same background color as the topbar */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  
  .title {
    color: #dce4dc;
    font-size: 2rem;
    margin: 0;
    margin-left: 180px; /* Add margin to the left for spacing */
  }
  
  .topbar {
    background: #333;
    color: white;
    padding: 10px;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    z-index: 999;
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
  }
  
  .content {
    padding: 20px;
    flex: 1;
    margin-top: 160px; /* Ensure the content starts below the fixed header and topbar */
  }
  </style>
  
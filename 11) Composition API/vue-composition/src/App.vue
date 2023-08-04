<template>
  <header class="navbar">
    <strong>Vue composition API</strong>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link> &nbsp; &nbsp; &nbsp;
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view />
  </div>
</template>


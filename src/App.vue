<script setup>
import HomePage from './pages/HomePage.vue'
import {RouterLink} from 'vue-router';

</script>

<template>
  <p class="font-Pixel text-3xl">Pokemon</p>
  <div id="nav">
      <router-link to="/">Home</router-link> 
  </div>
  <router-view />
  <HomePage />

</template>

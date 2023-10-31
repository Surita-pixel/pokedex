<script setup>
import HomePage from './pages/HomePage.vue'
import {RouterLink} from 'vue-router';

</script>

<template>
  <div>

    <p class="font-Pixel text-3xl w-full h-full">Pokemon</p>
    <div id="nav">
        <router-link to="/">Home</router-link> 
    </div>
    <router-view />
    <HomePage />
  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class=" h-screen p-5">
    <p class="font-Pixel text-3xl">Pokemon</p>
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>


<template>
    <div class="mb-4 flex p-0 m-0">
        <img :src="sprites.front_default" alt="Pokemon Sprite" class="mx-auto p-0 m-0" />
        <img :src="sprites.back_default" alt="Pokemon Sprite" class="mx-auto p-0 m-0" />

      </div>
      <div class="mb-4 flex p-0 m-0">
        <img :src="sprites.front_shiny" alt="Pokemon Sprite" class="mx-auto p-0 m-0" />
        <img :src="sprites.back_shiny" alt="Pokemon Sprite" class="mx-auto p-0 m-0" />

      </div>
</template>

<script setup>
const props = defineProps({
    sprites:{    }
})
</script>
<template>
<div class="text-center">
        <div class="flex text-center content-center justify-center items-center">
          <h2 class="text-lg font-semibold" :style="letraEstilos[tipo]">{{ capitalize(tipo) }}/</h2>
          <h2 class="text-lg font-semibold" :style="letraEstilos[tipo2]">{{ capitalize(tipo2) }}</h2>

        </div>

      </div>
        
    
</template>
<script setup>
import { letraEstilos, capitalize } from '../constantes';
const props = defineProps({tipo:String, tipo2:String})
</script>
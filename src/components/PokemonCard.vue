
<template>

    <div 
    :style="tipoStyles[tipo_pokemon] || {}"
    class="card rounded-2xl border-gray-800 border-2 p-3 parallax-effect w-auto">
        <div class="flex items-center justify-center">
            <img class="w-16 h-16 "
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`"
                :alt="`${name}`" style="height: 100px; width: 100px;" />
            <p class="p-1"> #{{ id }} {{ name.charAt(0).toUpperCase() + name.slice(1)}}</p>
            
        </div>
    </div>
</template>

<style scoped>
.parallax-effect {
    transform: translateZ(0);
    transition: transform 0.3s ease-in-out;
}

.parallax-effect:hover {
    transform: translate(0, -10px);
    cursor: pointer;
}
</style>
    
<script>
import { type } from '../api/api.pokedx'
import {tipoStyles} from '../constantes';
export default {
  
    props: {
        name: String,
        url: String
    },
    async setup(props) {
        let id = props.url.split('/')
        id = id[id.length - 2]
        let tipo_pokemon=await type(props.url)
        return {
            id, tipo_pokemon,tipoStyles
        }
    }
}
</script>
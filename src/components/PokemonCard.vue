
<template>

    <div 
    :style="tipoStyles[tipo_pokemon] || {}"
    class="card rounded-2xl border-gray-800 border-2 p-3 parallax-effect">
        <div class="flex items-center">
            <img class="w-16 h-16 mr-2"
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`"
                :alt="`${name}`" style="height: 100px; width: 100px;" />
            <p class="p-6"> {{ id }} {{ name.charAt(0).toUpperCase() + name.slice(1)}}</p>
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
    .
<script>
import { type } from '../api/api.pokedx'
export default {
    data() {
    return {
      tipoStyles: {
        normal: {
          backgroundColor: '#A8A77A',
        },
        fighting: {
          backgroundColor: '#C22E28',
        },
        flying: {
          backgroundColor: '#A98FF3',
        },
        poison: {
          backgroundColor: '#A33EA1',
        },
        ground: {
          backgroundColor: '#E2BF65',
        },
        rock: {
          backgroundColor: '#B6A136',
        },
        bug: {
          backgroundColor: '#A6B91A',
        },
        ghost: {
          backgroundColor: '#735797',
        },
        steel: {
          backgroundColor: '#B7B7CE',
        },
        fire: {
          backgroundColor: '#F75228',
        },
        water: {
          backgroundColor: '#3393F3',
        },
        grass: {
          backgroundColor: '#005C00',
        },
        electric: {
          backgroundColor: '#F7D02C',
        },
        psychic: {
          backgroundColor: '#F95587',
        },
        ice: {
          backgroundColor: '#96D9D6',
        },
        dragon: {
          backgroundColor: '#6F35FC',
        },
        dark: {
          backgroundColor: '#705746',
        },
        fairy: {
          backgroundColor: '#D685AD',
        },
        unknown: {
          backgroundColor: '#68A090',
        },
        shadow: {
          backgroundColor: '#594736',
        },
        // Agrega otros estilos para tipos de Pokémon adicionales aquí
      },
    };
  },

    props: {
        name: String,
        url: String
    },
    async setup(props) {
        let id = props.url.split('/')
        id = id[id.length - 2]
        let tipo_pokemon=await type(props.url)
        return {
            id, tipo_pokemon
        }
    }
}
</script>
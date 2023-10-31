<template>
  <div class="pokemons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "
    ref="pokemonList">
    <Suspense>
      <router-link   v-for="pokemon in info" :key="pokemon.name"  :to="`/detail/${pokemon.name}`">
        <PokemonCard :name="pokemon.name" :url="pokemon.url"/>

      </router-link>

    </Suspense>
  </div>
</template>
  
 
<script>
import { getAllPokemonData } from '../api/api.pokedx';
import PokemonCard from '../components/PokemonCard.vue';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      info: [], // Inicializa info como un arreglo vacío
      nextUrl: 'https://pokeapi.co/api/v2/pokemon',
    };
  },
  mounted() {
    this.loadMoreData();
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    loadMoreData() {
      getAllPokemonData(this.nextUrl)
        .then(({ alldata, next }) => {
          this.info = [...this.info, ...alldata];
          this.nextUrl = next;
        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    },
    handleScroll() {
      const pokemonList = this.$refs.pokemonList;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pokemonListHeight = pokemonList.offsetHeight;

      // Detecta si el usuario se encuentra cerca del final de la lista
      if (scrollY + windowHeight >= pokemonListHeight) {
        this.loadMoreData();
      }
    },
  },
  components: { PokemonCard, RouterLink },
};
</script>
 
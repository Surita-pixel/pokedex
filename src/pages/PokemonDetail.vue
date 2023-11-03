<template>
  <div class=" bg-gray-200">

  </div>
  <div class=" flex flex-col items-center justify-center ">
    <div class="flex items-center mb-4">
  <span class="material-symbols-outlined">
    arrow_back
  </span>
  <h1 class="text-2xl font-semibold mx-6 ">{{ capitalize(name) }}</h1>
  <span class="material-symbols-outlined">
arrow_forward
</span>
</div>

    <div class="my-4 bg-white rounded-md shadow-md p-4 max-w-xs justify-start">
      <SpritesPokemon :sprites="data.sprites" />
      <TypeText :tipo="tipo" :tipo2="tipo2" />

    </div>
  </div>
  <MovesTable :moves="data.moves" />
</template>

<script>
import { getPokemonDetail } from '../api/api.pokedx';
import { letraEstilos, tipoStyles, capitalize } from '../constantes';
import SpritesPokemon from '../components/SpritesPokemon.vue';
import MovesTable from '../components/MovesTable.vue';
import TypeText from '../components/TypeText.vue';

export default {
  props: {
    name: String,
    url: String,
    color: String,
  },
  async setup(props) {
    const data = await getPokemonDetail(props.name);
    const tipo = data.types[0].type.name;
    const tipo2 = data.types[1].type.name;

    return { data, tipo, tipo2, tipoStyles, letraEstilos, capitalize, };
  },
  components: { SpritesPokemon, SpritesPokemon, MovesTable, TypeText }
};
</script>

<style></style>
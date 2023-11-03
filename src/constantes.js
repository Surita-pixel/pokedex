const tipoStyles = {
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
  }
}
const letraEstilos ={
  normal: {
    color: '#A8A77A',
  },
  fighting: {
    color: '#C22E28',
  },
  flying: {
    color: '#A98FF3',
  },
  poison: {
    color: '#A33EA1',
  },
  ground: {
    color: '#E2BF65',
  },
  rock: {
    color: '#B6A136',
  },
  bug: {
    color: '#A6B91A',
  },
  ghost: {
    color: '#735797',
  },
  steel: {
    color: '#B7B7CE',
  },
  fire: {
    color: '#F75228',
  },
  water: {
    color: '#3393F3',
  },
  grass: {
    color: '#005C00',
  },
  electric: {
    color: '#F7D02C',
  },
  psychic: {
    color: '#F95587',
  },
  ice: {
    color: '#96D9D6',
  },
  dragon: {
    color: '#6F35FC',
  },
  dark: {
    color: '#705746',
  },
  fairy: {
    color: '#D685AD',
  },
  unknown: {
    color: '#68A090',
  },
  shadow: {
    color: '#594736',
  }
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
export {tipoStyles, letraEstilos, capitalize}
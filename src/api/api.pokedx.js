import axios from 'axios';


export async function getAllPokemonData(url, alldata = []){
  try{
    const response = await axios.get(url)
    const {results, next} = response.data
    if(results){
      alldata = [...alldata, ...results]
      
      return {alldata, next};
      
    }
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }
}

export async function type(url){
  const response = await axios.get(url)
  const tipo = response.data.types[0].type.name
  return tipo
}

export async function getPokemonDetail(name){
  
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (r)=>{
        return r.json()
      }
    ).then(
      (r)=>r
    )
    return response
  }catch (e){}
}
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PokemonDetail from './pages/PokemonDetail.vue'

const routes =[
    {
        path:"/",
        name:"home",
        component:HomePage
    },
    {
        path: "/pokemon/:name", // Utiliza :name como parámetro dinámico
        name: "detail",
        component: PokemonDetail,
        props: true, // Permite pasar props a la ruta
      },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
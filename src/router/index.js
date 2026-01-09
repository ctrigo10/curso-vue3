import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";

/*
Tipos de history:
1) createWebHistory()
   - Activar el html5 history API, Esto permite URLs limpias (sin #)
   - Requiere que se configure un servidor que soporte las URLs sin #
   - Nos da la opción de usar pushState() o popState()
   - Mejor SEO!!!!!
2) createWebHashHistory()
   - Urls con #
   - Navega usando replaceState()
   - Peor SEO
   - Se usa cuando no se controla el backend o hosting
   - Funciona en hostings como github pages, netlify, etc.
3) createMemoryHistory()
   - Se usa en SSR Nuxt.js
   - Se usa en pruebas unit test
*/

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateMovie,
    },
    {
      path: '/movies/:movieTitle',
      name: 'movieDetails',
      component: MovieDetails,
    }
  ]
})

export default router
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMovieStore = defineStore(
  'movie',
  () => {
    const movies = ref([
      { title: 'Inception', duration: '148 min', director: 'Christofer Nolan' },
      {
        title: 'The lord of the Rings',
        duration: '201 min',
        director: 'Peter Jackson',
      },
      {
        title: 'Interstellar',
        duration: '170 min',
        director: 'Christofer Nolan',
      },
    ]);

    const addMovie = (movie) => movies.value.push(movie);

    const getMovie = (movieTitle) => {
      return movies.value.find((movie) => movie.title === movieTitle);
    };

    return {
      movies,
      addMovie,
      getMovie,
    };
  },
  {
    persist: true, // Para el plugin de persistencia
  }
);

<script setup>
import HeaderMovies from '../components/HeaderMovies.vue';
import { useMovieStore } from '../stores/movies';

const { movies } = useMovieStore();
</script>

<template>
  <HeaderMovies />

  <div class="movies">
    <ul>
      <li v-for="movie in movies" :key="movie.title" class="movie">
        <router-link :to="{name: 'movieDetails', params: { movieTitle: movie.title }}">
          {{  movie.title }}
        </router-link>
        <p>Duration: {{ movie.duration }}</p>
        <p>Director: {{ movie.director }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .movies {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .movie {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 500px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
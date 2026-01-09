<script setup>
import { reactive } from 'vue';
import HeaderMovies from '../components/HeaderMovies.vue';
import { useMovieStore } from '../stores/movies';
import router from '../router';

const { addMovie } = useMovieStore();

const movie = reactive({
  title: '',
  duration: 0,
  director: ''
})


const handleSubmit = () => {
  if (!movie.title || !movie.duration || !movie.director) {
    alert("Rellena todos los campos")
    return;
  }

  // mandar una copia
  addMovie({...movie})

  movie.title = '';
  movie.duration = 0;
  movie.director = '';

  // Navegación programática
  router.push({ name: 'movies' })
}
</script>

<template>
  <HeaderMovies />

  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Title</label>
    <input v-model="movie.title" type="text" id="title">

    <label for="duration">Duration</label>
    <input v-model="movie.duration" type="number" id="dutarion">

    <label for="director">Director</label>
    <input v-model="movie.director" type="text" id="dutarion">

    <button>Enviar</button>
  </form>
</template>

<style scoped>
.form {
  margin: 20px auto;
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem
}
</style>
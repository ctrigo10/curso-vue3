<script setup>
import { ref } from 'vue';
import HeaderMovies from '../components/HeaderMovies.vue';

const counter = ref(1)

</script>

<template>
  <HeaderMovies />
  <h1>Bienvenido a la página principal</h1>

  <h2 id="counter">
    Counter: {{ counter }}
    <button @click="counter++" id="counter-btn">+</button>
  </h2>
</template>
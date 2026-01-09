<script setup>
import { ref } from 'vue';

let number = ref(0);

const addOne = () => {
  number.value++;
}
</script>

<template>
  <h1>Eventos</h1>
  <h2>{{ number }}</h2>
  <button @click="addOne">Add one</button>
</template>
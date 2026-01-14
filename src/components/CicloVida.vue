<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

const contador = ref(0);
let interval;

onMounted(() => {
  console.log('🔴 onMounted -> Componente montado');
  interval = setInterval(() => {
    contador.value++;
  }, 1000);
})

onUpdated(() => {
  console.log('🔵 onUpdated -> el estado cambio ')
})

onUnmounted(() => {
  console.log('🔶 onUnmounted -> componente destruido ')
})
</script>

<template>
  <div>
    <h3>contador: {{ contador }}</h3>
    <p>Mira la consola</p>
  </div>
</template>
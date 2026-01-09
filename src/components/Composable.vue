<script setup>
import { useCounter } from './composables/useCounter';

/*
En vuejs, los composables son funciones que encapsulan lógica reactiva
y puede ser reutilizado en múltiples componentes.

Los composables nos permite organizar y retulizar lógica de manera módular
Ejemplos: login, api
*/

const {count, decrement, increment} = useCounter();
</script>

<template>
  <h1>Composable</h1>
  <p>Contador: {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
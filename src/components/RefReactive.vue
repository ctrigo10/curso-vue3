<script setup>
/**
 Ref: Valores simples
 Reactive: Objetos

 Ref: Observa valores
 Reactive: Observa Objetos
 */
import { reactive, ref } from 'vue';

let number = 0;
let numberRef = ref(number)

const persona = reactive({
  nombre: 'Carlos',
  Apellido: 'Trigo'
})

setInterval(() => {
  number++;
  numberRef.value = number
}, 1000)
</script>

<template>
  <h1>Ref Reactive</h1>
  <h2>Ref</h2>
  <!-- <h3>{{ number }}</h3> -->
  <h3>{{ numberRef }}</h3>

  <h2>Reactive</h2>
  <h3>{{ persona }}</h3>
  <h3>{{ persona.nombre }}</h3>
  <h3>{{ persona.Apellido }}</h3>
</template>
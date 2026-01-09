<script setup>
import { reactive, ref } from 'vue';

  let message = ref('');
  let messageTrim = ref('') // Eliminar espacios en blanco
  let messageNumber = ref('') // Convertir a número
  let messageLazy = ref('') // Actualiza al salir del campo

  const persona = reactive({
    nombre: '',
    edad: 25
  })

</script>

<template>
  <h1>V model</h1>
  <h2>Default</h2>
  <h3>{{ message }}</h3>
  <input v-model="message"/>

  <h2>Trim</h2>
  <h3>{{ messageTrim }}</h3>
  <input v-model.trim="messageTrim">

  <h2>Number - {{ typeof messageNumber }}</h2>
  <h3>{{ messageTrim }}</h3>
  <input v-model.number="messageNumber">

  <h2>Lazy - {{  typeof messageLazy }}</h2>
  <h3>{{ messageLazy }}</h3>
  <input v-model.lazy="messageLazy">

  <h2>Reactive</h2>
  <h3>{{ persona }}</h3>
  <h3>{{ persona.nombre }}</h3>
  <input v-model="persona.nombre">

</template>
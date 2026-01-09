<script setup>
import { ref } from 'vue';

const userName = ref('Adrian')

const emit = defineEmits(['login'])

const login = () => {
  //Ingrese
  emit('login', userName.value)
}
</script>

<template>
  <h2>Comunicación Emits</h2>
  <p>Componente Hijo: Nombre de usuario: {{  userName }}</p>
  <button @click="login">Login</button>
</template>
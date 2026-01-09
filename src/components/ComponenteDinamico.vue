<script setup>
/*
shallowRef es una reactividad superficial
*/
import { shallowRef } from 'vue';
import LoginForm from './dinamicos/LoginForm.vue';
import RegisterForm from './dinamicos/RegisterForm.vue';


const componenteActual = shallowRef(LoginForm);

const opciones = {
  LoginForm,
  RegisterForm
}
</script>

<template>
  <h1>Componentes dinámicos</h1>
  <button @click="componenteActual = opciones.LoginForm">Login</button>
  <button @click="componenteActual = opciones.RegisterForm">Register</button>

  <component :is="componenteActual" />

</template>
<script setup>
import { ref } from 'vue';
import CicloVida from './components/CicloVida.vue';

  /*
  VUE ROUTER para las rutas
  1- Debemos instalar vue-router: npm i vue-router
  2- Crear una carpeta views o pages para las vistas en src
  3- Crear el archivo router
  4- Configurar vue-router en el main.js
  5- Agregar  <RouterView /> en el app.vue
  */

 /*
  PINIA: Store, reemplazo de vuex
  1. Instalar npm i pinia
  2. Crear un archivo de almacenamiento store.js en src
  3. Configurar pinia en el main.js
 */

/*
  PINIA PLUGIN PERSINTENCIA
  1. Instalar pinia-plugin-persistedstate: npm i pinia-plugin-persistedstate
  2. Configurar en el main.js
*/

/* CICLO DE VIDA
Creación: beforeCreate, created
Montaje: beforeMount, mounted
Actualización: beforeUpdate, updated
Desmontaje: beforeUnmount, unmounted
*/

const mostrar = ref(true)
</script>
<template>
  <RouterView />

  <button @click="mostrar = !mostrar">
    {{  mostrar ? "Desmontar" : "Montar" }} Componente
  </button>
  <CicloVida v-if="mostrar" />
</template>
<script setup>
/*
Computed -> Calcular: No cambia datos, SOLO devuelve un valor calculado
- Se cachea
- Se recalcula solo si cambia una dependencia

watch -> Reaccionar; Observa una cosa específica, ejecuta lógica cuando cambia
Ideal para:
 - Llamadas a API
 - Validaciones
 - Efectos secundarios

 watchEffect -> Reacciona automáticamente, Se ejecuta inmediatamante, Vue es detectar lo que cambia
 - No define que observar
 - Ideal para lengthogica reactiva simple
*/
import { computed, ref, watch, watchEffect } from 'vue';

let username = ref('Carlos')
let nameLength1 = ref(username.value.length)

const nameLength2 = computed(() => {
  // cálculos
  return username.value.length;
})

// Watch
const name = ref('Adrian')
watch(name, () => {
  //console.log('Watch name changed')
}, {
  immediate: true
})

watch(name, (newValue, oldValue) => {
  //console.log('Watch name changed', newValue, oldValue)
}, {immediate: true})

const fruit = ref({
  name: 'apple'
})

watch(fruit, () => {
  //console.log('watch fruit changed')
}, { immediate: true, deep: true})

watchEffect(() => {
  // observa todas las variables que utilicemos en la función
  console.log('watchEffect name changed', name.value)
})

</script>

<template>
  <h1>Computed Observers</h1>
  <h2>Computed</h2>
  <input v-model="username" />
  <h3>Hola, {{ username }}</h3>
  <h3>Tu nombre tiene {{ nameLength1 }} caracteres</h3>
  <h3>Tu nombre tiene {{ nameLength2 }} caracteres</h3>

  <h2>Observers</h2>
  <h3>Hola, {{  name }}</h3>
  <button @click="name = 'José'">Cambiar nombre</button>

  <h3>Fruta, {{ fruit.name }}</h3>
  <button @click="fruit.name = 'banana'">Cambiar fruta</button>
</template>
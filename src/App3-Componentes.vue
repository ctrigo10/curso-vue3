<script setup>
import { ref } from 'vue';
import ComunicacionProps from './components/ComunicacionProps.vue';
import ComunicacioniEmits from './components/ComunicacioniEmits.vue';
import Slots from './components/Slots.vue';
import SlotsScoped from './components/SlotsScoped.vue';
import ComponenteDinamico from './components/ComponenteDinamico.vue';
import Composable from './components/Composable.vue';

// Comunicación PROPS
const msg = 'Mensaje desde el padre 2'

const person = {
  sex: 'Femenino',
  age: 18
}

// Comunicación EMITS
const displayName = ref('')
const setName = (e) => {
  console.log('-----e', e)
  displayName.value = e
}
</script>

<template>
  <!--Componente global-->
 <!--  <ComponenteGlobal /> -->

<!-- Comunicación PROPS-->
<!--  <ComunicacionProps msg="Mensaje desde el padre 1" />
 <ComunicacionProps :msg="msg" />
 <ComunicacionProps :person="person" /> -->

 <!-- Comunicación EMITS-->
 <!--  <h1>Componente padre, hola {{ displayName }}</h1>
  <ComunicacioniEmits @login="setName" /> -->

  <!--Slots -->
 <!--  <h1>Slots</h1>
  <h2>Slotes genéricos</h2>
  <Slots>
    <p>Contenido del slot</p>
    <p>sadfsadfdsf</p>
  </Slots>

  <Slots />

  <h2>Slots nombrados</h2>
  <Slots>
    <template #header>
      <h3>Contenido del HEADER</h3>
    </template>

    <template v-slot:footer>
      <h3>Contenido del FOOTER</h3>
    </template>

    <template #default>
      <h3>Contenido POR DEFECTO del padre</h3>
    </template>
  </Slots> -->

  <!--Slots scoped-->
<!--   <SlotsScoped v-slot="{ user }">
    <strong>{{ user.name }}</strong> - {{ user.role }}
  </SlotsScoped> -->

  <!-- Compontentes dinámicos-->
  <!--  <ComponenteDinamico /> -->

  <!--Composable-->
  <Composable />
</template>

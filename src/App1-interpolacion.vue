<script setup>
  /* Interpolacion y vbind */
  const imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWB8F3esRUr3nAHlWc1k2-ZdSEdBQql_wpg&s'

  const activo='activo'

  const esActivo = true;
  const hayError = true;

  const clasePrincipal = "activo";
  const claseSecundaria = 'error';

  const colorTexto = 'blue';
  const tamanio = 20;
</script>

<template>
  <!-- v-bind conecta un atributo html con una variable-->
  <img v-bind:src="imagen" />
  <img :src="imagen" />

  <!--v-bind con clases -->
  <p v-bind:class="activo">Texto dinámico 1</p>
  <p :class="activo">Texto dinámico 1</p>

  <!-- v-bind con condiciones-->
  <p :class="{activo: esActivo}">Texto dinámico 2</p>

  <p :class="{activo: esActivo, error: hayError}">Estado del sistema</p>

  <!-- v-bind con array -->
  <p :class="[clasePrincipal, claseSecundaria]">Texto</p>

  <!-- v-bind con estlos-->
   <p :style="{ colot: colorTexto, fontSize: tamanio + 'px' }">Texto con éstilo dinámico</p>

</template>

<style scoped>
  .activo {
    font-weight: bold;
    font-style: italic;
  }

  .error {
    color: red
  }
</style>

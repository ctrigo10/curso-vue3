<script setup>
</script>

<template>
  <div class="child">
    <h2>SLOT: Este es un componente Hijo</h2>

    <slot>
      <h4>Contenido por defecto</h4>
    </slot>

    <p>Slot Nombrados</p>
    <slot name="header"></slot>
    <p>Centrooooooooooo</p>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
  .child {
    border: 3px solid black;
    padding: 10px
  }
</style>
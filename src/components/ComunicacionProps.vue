<script setup>
  defineProps({
    //msg: String

    msg: {
      type: String,
      //required: true
      default: 'Hola mundo'
    },

    //person: Object

    /* person: {
      type: Object,
      required: true
    } */

    person: {
      type: { sex: String, age: Number},
      default: () => ({ sex: 'Masculino', age: 20})
    }
  })
</script>

<template>
  <h1>Comunicación Props</h1>
  <p>{{ msg }}</p>

  <div>{{ person?.sex }} - {{  person?.age }}</div>
</template>

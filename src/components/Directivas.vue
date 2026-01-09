<script setup>
const condicion1 = true;
const condicion2 = true;

const items1 = ["Item 1", "Item 2", "Item 3"];
const items2 = [
  { id: 1, name: "Item 1"},
  { id: 2, name: "Item 2"},
  { id: 3, name: "Item 3"}
]
</script>

<template>
  <h1>Directivas</h1>
  <h2>v-if</h2>
  <h3 v-if="condicion1">Condición 1</h3>
  <h3 v-else-if="condicion2">Condición 2</h3>
  <h3 v-else>No existe condición</h3>

  <h2>v-for</h2>
  <ul>
    <li v-for="item in items1" :key="item">
      {{ item }}
    </li>
    <br>

    <p v-for="(item, index) in items2" :key="index">
      {{ index + 1 }} - {{ item.name }}
    </p>

    <br>
    <li v-for="item in items2" :key="item.id"> {{  item.name }}</li>
  </ul>

  <h2>v-show</h2>
  <h2 v-show="condicion1">Condición 1</h2>
  <h2 v-show="condicion2">Condición 2</h2>
</template>
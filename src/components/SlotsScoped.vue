<script setup>
  const users = [
    { id: 1, name: 'Juan', role: 'Admin' },
    { id: 2, name: 'Carlos', role: 'User' }
  ]
</script>

<template>
  <h1>Slotes Scoped</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <slot :user="user" />
    </li>
  </ul>
</template>
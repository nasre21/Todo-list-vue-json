<template>
    <h1>Lista de tareas</h1>
    <div v-for="info in data.datos" :key="info.id">
        <h4>{{ info.titulo }}</h4>
        <p>{{ info.quien }}</p>
        <p>{{ info.description }}</p>
    </div>
  
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    data:Object,
})
</script>

<style>

</style>
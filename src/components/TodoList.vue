<template>
    <h1>Lista de tareas</h1>
    <div v-for="info in data.datos" :key="info.id">
        <h4>{{ info.g }}</h4>
        <p>{{ info.quien }}</p>
        <p>{{ info.description }}</p>
        <div>
            <button @click="buttonDelete(info.id)"> Delete</button>
            <button @click="buttonEditar(info.id)"> Editar</button>
            
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';
import axios from 'axios'
defineProps({
    data:Object,
})

function buttonDelete(id){
    
        axios.delete(`http://localhost:3000/tareas/${id}`)
        location.reload()   

}

function buttonEditar(id){
    
    axios.put(`http://localhost:3000/tareas/${id}`)
    location.reload()

}

</script>

<style>

</style>
<template>
    <h1>Lista de tareas</h1>
    <div v-for="info in data.datos" :key="info.id">
        <h4>{{ info.titulo }}</h4>
        <p>{{ info.quien }}</p>
        <p>{{ info.description }}</p>
        <div>
            <button @click="buttonDelete(info.id)"> Delete</button>
            <button @click="buttonEditar(info.id, info.quien)"> Editar</button> 
        </div>
    </div>
    <div v-show="mostrarEdit">
            <h2>Editar todolist</h2> 
          
            <form class="formulario" @submit.prevent>
                <input type="text" placeholder="Intruduce your Title" v-model="formData">
                <div>
                <textarea name="" cols="30" rows="10" v-model="formTexto"></textarea>
                </div>
                
             </form>
            <div>
                <button @click="send">Enter</button>
            </div>
        
        </div>

</template>

<script setup>
import { defineProps, ref } from 'vue';
import axios from 'axios'
defineProps({
    data:Object,
})

async function buttonDelete(id){
      await  axios.delete(`https://nasser.onrender.com/tareas/${id}`)
        location.reload()  
}

let mostrarEdit = ref(false)
let idTarea = ref("")
let quienTarea = ref("")

let formData = ref("")
let formTexto = ref("")
let isError = false


// editar
function buttonEditar(id, quien){
  idTarea.value = id
  quienTarea.value = quien
  mostrarEdit.value = true
}

async function send(){
    try{
       await axios.put(`https://nasser.onrender.com/tareas/${idTarea.value}`,{
            titulo:formData.value,
            description:formTexto.value,
            quien: quienTarea.value
        })
        location.reload()
    }
    catch(error){
        isError = true

     console.log(error) 
    }
    return{
        isError
    }
} 



</script>

<style>


</style>
<template>
    <img v-if="isError" src="@/assets/logo.png" alt="">
    <img v-if="isLoading" src="@/assets/logo.png" alt="">
<div v-if="!isLoading && !isError">
   <form class="formulario" @submit.prevent>
    <input type="text" placeholder="Intruduce your name" v-model="formData.quien">
    <input type="text" placeholder="Intruduce your Title" v-model="formData.titulo">
    <div>
    <textarea name="" id="" cols="30" rows="10" v-model="formData.description"></textarea>
    </div>
   
   </form>
   <div>
    <button @click="guardar">Send</button>
   </div>
</div>
</template>

<script setup>
import {reactive} from "vue"
import axios from "axios";

const formData = reactive({
    titulo: "",
    description: "",
    quien: "",
})

async function guardar() {
let isError = false
let isLoading= true

try {
   await axios.post("https://nasser.onrender.com/tareas" , {
        titulo: formData.titulo,
        description: formData.description,
        quien: formData.quien
     })
    
    location.reload()
     
   
    
} 
catch (error) {
     isError = true
    
}
isLoading= false

return {isError, isLoading}

}



</script>

<style scoped>

</style>
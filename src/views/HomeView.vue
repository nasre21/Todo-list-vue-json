<template>
    <h1>Cosas que hacer </h1>
  <div>
    <img v-if="data.isError" src="@/assets/logo.png" alt="">
    <img v-if="data.isLoading" src="@/assets/logo.png" alt="">
    <div v-if="!data.isLoading && !isLoading">
      <Formulario />
      <Lista :data="data" />

    </div>
    
  </div>
</template>

<script setup>
  import info from "@/infoData/infoData"
  import {ref , onMounted} from "vue"
  import Formulario from "@/components/FormularioVue.vue"
  import Lista from "@/components/TodoList.vue"


  let data = ref(onMounted(async ()=>{
    data.value = await info.conseguirInfo()
  }))


</script>

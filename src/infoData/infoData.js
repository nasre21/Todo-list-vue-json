import axios from "axios";
import {ref} from "vue"

async function conseguirInfo (){
    let isError = false
    let isLoading = true

    const datos = ref(null)

    try{
        let response = await axios.get("https://nasser.onrender.com/tareas")
        datos.value = response.data
    }
    catch(error){
        isError = true
    }
    isLoading= false

    return {isLoading, isError, datos}
}


export default{
    conseguirInfo
}
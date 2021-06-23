<template>
  <q-page >
    
    <div>
       <head1 />
    </div>
    <div>
    <todolist /> 
    </div>
   


  </q-page>
</template>

<script>

import head1 from "../components/head.vue"
import todolist from "../components/todolist.vue"
export default {
  name: 'PageIndex',
  components:{
    head1,

    todolist
  }
}



</script>
 

 <style scoped>
 *{background: #22343C;}
 </style>
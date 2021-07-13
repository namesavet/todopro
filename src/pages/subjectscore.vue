<template>
  <q-page class="subject">
   
        <q-toolbar>
         <q-toolbar-title>
           <router-link to="backtotestandscore">
          <q-btn flat color="" icon="keyboard_arrow_left" label="Back" style="font-size:16px ;color:#96A7AF" />
          </router-link>
          </q-toolbar-title>
    
        </q-toolbar>
      
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="q-pa-md">
          <div class="row">
            <div class="text-white text-bold" style="font-size: 30px">SPI</div>
            
          </div>
           <div class="text-blue-grey-4">ดร.กุลศิริ</div>
        </div>
     
 </div>

<div class="row justify-center">
<div class="score ">
    
     <div class="q-my-md q-ml-lg text-white text-bold" style="font-size: 20px">Score</div>
    
  <div class="row justify-center">
         <q-linear-progress dark stripe rounded size="16px" :value="progress2" color="red" class=""  style="width: 280px;" />

     </div>


 </div>
 
</div>
 
     
      <q-tabs
        
        class=" shadow-2 "
        style="background: #30444E;color:white;bottom:0 ;
        position:absolute ;width:100% ;
        border-radius: 15px 15px 0px 0px;"
      >
        <q-tab name="calendar" icon="calendar_today" />
        <q-tab name="home" icon="home" />
        <q-tab name="book" icon="menu_book" />
      </q-tabs>
  
    
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.subject {
  background: #22343c;
}
.score{
  width: 317px;
  height: 100px;
  background: #2A3C44;
  border-radius: 25px;

}





</style >
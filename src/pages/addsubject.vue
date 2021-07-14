<template>
  <q-page class="addsub">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtosubject">
          <q-btn flat color="" icon="keyboard_arrow_left" label="Back" style="font-size:16px ;color:#96A7AF" />
        </router-link>
      </q-toolbar-title>

         <q-btn flat  dense text-color="white" icon="done" class="q-mr-xs" style="background-color:#40DF9F"/>

    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Subject</div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="profile" style="overflow: hidden">
        <div class="row items-center justify-center q-mt-md">
          <q-img src="../image/women.png" style="height: 50%; max-width: 50%" />
        </div>
      </div>
    </div>
 
    <div class="row justify-center q-mt-lg">
      <div class="sname" style="overflow: hidden">
        <div class="col-2 ">
          <div class="row items-center justify-center q-mt-sm">
            <q-img src="../image/book.png" style="height:70%; max-width:70% " />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md  q-gutter-xs">
        <q-input v-model="subjectname"  label-color="#96A7AF" label="Subject name"  />
      </div>
    </div>

    <div class="row justify-center">
       <div class="inname" style="overflow: hidden">
          <div class="col-2">
            <div class="row items-center justify-center q-mt-sm">
              <q-img src="../image/book.png" style="height: 70%; max-width: 70%" />
            </div>
          </div>
        </div>
      <div class="col-8 q-ml-md  q-gutter-xs">
        <q-input v-model="initialsname" label-color="#96A7AF" label="Initials name" />
      </div>
    </div>

    <div class="row justify-center">
       <div class="teaname" style="overflow: hidden">
          <div class="col-2 item-center">
            <div class="row items-center justify-center q-mt-sm">
              <q-img src="../image/people.png" style="height: 70%; max-width: 60%" />
            </div>
          </div>
        </div>
        
      <div class="col-8 q-ml-md  q-gutter-xs">
        <q-input v-model="teachername" label-color="#96A7AF" label="Teacher name" />
      </div> 
    </div>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Credit</div>
      </div>
      
    </div>
    <div class="row ">
      <div class="col-8 q-ml-md  q-gutter-xs ">
        <q-select v-model="credit" :options="credits" label="Your credit" color="#22343c"   />
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Grade</div>
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Exam</div>
      </div>
    </div>

     <div class="row">
      <div class="col q-ml-lg q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 15px">Midterm exam</div>
      </div>
     </div> 



     <div class="row  q-gutter-xs">
       
         <div class="q-pa-md" style="max-width: 200px">

    <q-input filled v-model="date_midterm" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date_midterm">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      
    </q-input>
  
        </div> 

        <div class="col-4 q-ml-lg  q-gutter-xs">
          <q-input color="white" label-color="#96A7AF"   v-model="score" label="Score%" />
        </div>
    </div>


      <div class="row">
        <div class="col q-ml-lg q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 15px">Final exam</div>
        </div>
      </div> 

      <div class="row  q-gutter-xs">


   <div class="q-pa-md" style="max-width: 200px">
          
           <q-input filled v-model="date_final" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date_final">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      
    </q-input>
          
          
          
          </div>
     
      

        <div class="col-4 q-ml-lg  q-gutter-xs">
          <q-input color="white" label-color="#96A7AF"   v-model="score" label="Score%" />
        </div>
      </div>
         
      <div class="row">
        <div class="col q-ml-md q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">Desired grade</div>
        </div>
      </div>

      <div class="row ">
        <div class="col-8 q-ml-md  q-gutter-xs ">
          <q-select v-model="grade" :options="grades" label="Your grade" color="#22343c"   />
        </div>
      </div>
     
    
      
      
      

  </q-page>
</template>

<script>



export default {
  data() {
    return {
      subjectname: "",
      initialsname: "",
      teachername: "",  
      
      credit:(null),
      credits:[
        '(3)-(0)-(21)','(3)-(0)-(22)','(3)-(0)-(23)','(3)-(0)-(24)','(3)-(0)-(25)'
      ],
      selectday:"",
      score:"",
      grade:(null),
      grades:[
        'A','B+','B','C+','C','D-','D','E'
      ],
      date_midterm: ('2021/02/01'),
      date_final: ('2021/02/01'),
    };

  },
};
</script>

<style scoped >

.addsub{
  background: #22343c;
}
.sname {
  width: 38px;
  height: 48px;
  background:#625B39 ;
  border-radius: 15%;
}
.inname {
  width: 38px;
  height: 48px;
  background:#625B39 ;
  border-radius: 15%;
}
.teaname {
  width: 38px;
  height: 48px;
  background:#625B39 ;
  border-radius: 15%;
}
.profile {
  width: 65px;
  height: 66px;
  background: #ff565e;
  border-radius: 50%;
}
</style>



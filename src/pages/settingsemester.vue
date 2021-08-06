<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
          <q-btn
            flat
            @click="$router.push({ name: 'semester' })"
            push
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
      </q-toolbar-title>

      <div class="settingbtn q-mr-md">
        <q-btn
          flat
          round
          dense
          @click="$router.push({ name: 'semester' })"
          push
          text-color="white"
          icon="done"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Semester</div>
      </div>
    </div>

  
    <div class="row justify-center text-right" style="margin-top:15%;">
      <div class="col-5 q-ml-md"> 
        <div class="semestertitle q-mt-sm  ">1/2021</div> 
        </div>
      <div class="col-4 q-ml-md"> 
        <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
          />
      </div>  
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>
    
    <div class="row justify-center text-right" style="margin-top:15%;">
      <div class="col-5 q-ml-md"> 
        <div class="semestertitle q-mt-sm  ">2/2020</div> 
        </div>
      <div class="col-4 q-ml-md"> 
        <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
          />
      </div>  
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top:15%;">
      <div class="col-5 q-ml-md"> 
        <div class="semestertitle q-mt-sm  ">1/2020</div> 
        </div>
      <div class="col-4 q-ml-md"> 
        <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
          />
      </div>  
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top:15%;">
      <div class="col-5 q-ml-md"> 
        <div class="semestertitle q-mt-sm  ">2/2019</div> 
        </div>
      <div class="col-4 q-ml-md"> 
        <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
          />
      </div>  
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top:15%;">
      <div class="col-5 q-ml-md"> 
        <div class="semestertitle q-mt-sm  ">1/2019</div> 
        </div>
      <div class="col-4 q-ml-md"> 
        <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
          />
      </div>  
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    

    
  </q-page>
</template>

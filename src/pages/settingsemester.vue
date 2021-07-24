<template>
  <q-page class="settingsemester">
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

    <div class="row q-mt-xl">
      <div class="col-10 self-center ">
        <div class="semestertitle q-mt-sm text-center">1/2021</div> 
      </div>
      <div class="col ">
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

<style scoped>
.settingsemester {
  background: #22343c;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
.fontaddsubject {
  color: #3ed598;
}
.semestertitle {
  font-size: 16px;
  color: white;
  font-weight: bold;
}
</style>
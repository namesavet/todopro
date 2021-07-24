<template>
<q-page class="semester">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtohome">
          <q-btn
            flat
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
        </router-link>
      </q-toolbar-title>

      <router-link to=" ">
        <div class="settingbtn q-mr-md">
          <q-btn flat round dense text-color="white" icon="settings" class="" />
        </div>
      </router-link>
      
    </q-toolbar>

</q-page>
</template>

<style scoped>
.semester{
   background: #22343c;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}

</style>
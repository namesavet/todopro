<template>
  <q-page class="semester">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Index' })"
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
          @click="$router.push({ name: 'settingsemester' })"
          push
          text-color="white"
          icon="settings"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Semester</div>
      </div>
    </div>

    <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">1/2021</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">2/2020</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">1/2020</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">2/2019</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">1/2019</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
        <div class="row items-center justify-center q-mt-xl">
            <q-btn
              size="20px"
              round
              color=""
              icon="add"
              style="
                background-color: #40df9f;

                border-radius: 50%;
                border: 10px solid #286053;
              "
            />
        </div>
      </div>
    </div>

    <div class="row items-center justify-center">
      <div class="fontaddsubject">Add Term</div>
    </div>
  </q-page>
</template>

<style scoped>
.semester {
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
<template>
  <q-page class="addbackground">
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

<div :key="index" v-for="(semester,index) in semesters">
  <div class="row items-center justify-center q-mt-xl">
      <div class="semestertitle">{{semester.Semester_name}}</div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>
</div>
  

   
  </q-page>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      semesters: [],
    };
  },
  mounted() {
    this.getSemester();
  },
  methods: {
    async getSemester() {
      const {data} = await axios.get(
        "http://localhost:3000/semester/6130613034"
      );
      this.semesters = data.semester;
    },
  },
};
</script>

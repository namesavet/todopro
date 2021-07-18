<template>
  <q-page class="subject">
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
      <router-link to="backtosubjectscore">
        <div class="settingbtn">
          <q-btn flat round dense text-color="white" icon="add" class="" />
        </div>
      </router-link>
    </q-toolbar>


  <div class="q-pa-md row justify-center ">
    <div class="q-gutter-md text-white" >
      <q-date  style="background: #30444e; width: 375px;
  height: 380px; "
        v-model="date"
        :events="events"
        :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
      />
    </div>
  </div>


    <br />
    <br />
    <br />
    <br />

    <q-footer elevated>
      <q-toolbar
        class="shadow-2"
        style="
          background: #30444e;
          color: white;
          bottom: 0;
          position: absolute;
          width: 100%;
          border-radius: 15px 15px 0px 0px;
        "
      >
        <q-toolbar-title class="row justify-evenly">
          <q-btn flat name="calendar" icon="calendar_today" />
          <q-btn flat name="home" icon="home" />
          <q-btn flat name="book" icon="menu_book" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      date: ref('2019/02/01'),
      events: [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
      eventsFn (date) {
        if (date === '2019/02/01' ||
          date === '2019/02/05' ||
          date === '2019/02/06' ||
          date === '2019/02/09' ||
          date === '2019/02/23') {
          return true
        }
        return false
      }
    }
  }
}
</script>


<style scoped>
.subject {
  background: #22343c;
}
.score {
  width: 317px;
  height: 100px;
  background: #2a3c44;
  border-radius: 25px;
  margin-top: 10px;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
.warringscore {
  width: 317px;
  height: 55px;
  background: #ff5656;
  border-radius: 25px;
  margin-top: 10px;
}
.scoregrade {
  width: 271px;
  height: 268px;
  background: #2a3c44;
  border-radius: 25px;
}

</style >

<script>
</script>
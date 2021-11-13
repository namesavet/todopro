<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'Index',
              query: {
                uid: student.uid,
                SemesterID: semester.SemesterID,
              },
            })
          "
          push
          color=""
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
      <div class="settingbtn">
        <q-btn
          flat
          round
          dense
          @click="
            $router.push({
              name: 'addcalendar',
              query: {
                uid: student.uid,
                SemesterID: semester.SemesterID,
              },
            })
          "
          push
          text-color="white"
          icon="add"
        />
      </div>
    </q-toolbar>

    <div class="items-center">
      <div class="q-gutter-md text-white text-center">
        <q-date
          style="background-color: #2a3c44; width: 95%; height: 380px"
          v-model="date"
          color="orange"
          :events="events"
          :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'orange')"
        />
      </div>
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs q-mt-lg">
      <div :key="index" v-for="(calendar, index) in calendars">
        <div
          class="row justify-center"
          @click="
            $router.push({
              name: 'event',
              query: {
                id: calendar.NoteID,
                uid: student.uid,
                SemesterID: semester.SemesterID,
              },
            })
          "
          push
        >
          <div class="typetest"></div>
          ,

          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              {{ calendar.Note_title }}
            </div>
          </div>
        </div>

        <div class="q-my-lg">
          <q-separator color="grey" inset="" />
        </div>
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
import axios from "axios";
import { date } from "quasar";
export default {
  name: "calendar",
  data() {
    return {
      calendars: [],
      date: " ",
      events: [],
      ListAllEvent: [],
      student: {},
      semester: {},
      
    };
  },
  mounted() {
    this.getCalendarData();
    this.getStudentData();
    this.getSemesterData();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getCalendarData() {
      const { data } = await axios.get("http://localhost:3000/calendar/getEvent/"  + this.$route.query.uid
      );
      this.ListAllEvent = data.calendar;
      this.date = this.formatDate(new Date());
      this.events = data.calendar.map((data) => {
        return this.formatDate(data.Note_date);
      });
    },
    async getStudentData() {
      const { data } = await axios.get(
        "http://localhost:3000/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },
    async getSemesterData() {
      const { data } = await axios.get(
        "http://localhost:3000/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },
  },
  watch: {
    date(value) {
      this.calendars = this.ListAllEvent.filter((data) => {
        return new Date(value).getTime() == new Date(data.Note_date).getTime();
      });
    },
  },
};
</script>


<template>
  <q-page class="addbackground">
    <q-form @submit="onSubmit()">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            flat
            @click="
              $router.push({
                name: 'event',
                query: {
                  id: calendar.NoteID,
                  uid: student.uid,
                  SemesterID: getchangSemester,
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
            push
            round
            dense
            text-color="white"
            icon="done"
            class=""
            type="submit"
          />
        </div>
      </q-toolbar>

      <div class="row justify-center">
        <div class="text-white text-bold" style="font-size: 30px">
          Edit Activity
        </div>
      </div>

      <div class="row justify-center q-mt-lg">
        <div class="bgtitle" style="overflow: hidden">
          <div class="col-2">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon
                name="chrome_reader_mode"
                size="30px"
                style="color: #ffc542"
              />
            </div>
          </div>
        </div>

        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            v-model="calendar.Note_title"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="Title"
            required
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="bgtitle" style="overflow: hidden">
          <div class="col-2">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon
                name="chrome_reader_mode"
                size="30px"
                style="color: #ffc542"
              />
            </div>
          </div>
        </div>
        <div class="col-8 q-ml-md q-gutter-xs">
          <q-select
            v-model="calendar.Note_type"
            :options="types"
            label="type"
            color="black"
            :input-style="{ color: 'white' }"
            label-color="grey"
            required
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="bgtitle" style="overflow: hidden">
          <div class="col-2 item-center">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="location_on" size="30px" style="color: #ffc542" />
            </div>
          </div>
        </div>
        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            v-model="calendar.Note_location"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="Location"
            required
          />
        </div>
      </div>

      <div class="q-mt-md">
        <div class="col-2 item-center q-ml-lg q-mr-lg" style="overflow: hidden">
          <div class="text-white text-bold" style="font-size: 25px">Date</div>
        </div>

        <div class="col-8 q-ml-lg q-mr-lg q-gutter-xs">
          <q-input
            filled
            v-model="calendar.Note_date"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            required
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="calendar.Note_date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="">
        <div class="col-2 item-center q-ml-lg">
          <div class="text-white text-bold" style="font-size: 25px">Time</div>
        </div>

        <div class="col-8 q-ml-lg q-mr-lg q-gutter-xs">
          <q-input
            filled
            v-model="calendar.Note_time"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            mask="time"
            :rules="['time']"
            required
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer" color="white">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="calendar.Note_time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>

      <div class="q-ml-lg text-white text-bold" style="font-size: 25px">
        Note
      </div>

      <div class="item-center text-center q-ml-lg q-mr-lg">
        <q-input
          v-model="calendar.Note_detail"
          filled
          type="textarea"
          color="white"
          :input-style="{ color: 'white' }"
          label-color="grey"
        />
      </div>
    </q-form>
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
          <q-btn
            flat
            name="calendar"
            icon="calendar_today"
            @click="
              $router.push({
                name: 'calendar',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
          <q-btn
            flat
            name="home"
            icon="home"
            @click="
              $router.push({
                name: 'Index',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
          <q-btn
            flat
            name="book"
            icon="menu_book"
            @click="
              $router.push({
                name: 'Readbook',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
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
      calendar: {},
      types: ["Homework", "Test", "Other"],
      student: {},
      semester: {},
      getchangSemester: "",
    };
  },
  mounted() {
    this.getCalendarData();
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
  },
  methods: {
    getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
    },
    formatDate(day) {
      return date.formatDate(day, "DD MMM YYYY");
    },
    async getCalendarData() {
      const { data } = await this.$axios.get(
        "/calendar/findnote/" + this.$route.query.id
      );
      this.calendar = data.calendar;
      this.calendar.Note_date = this.formatDate(this.calendar.Note_date);
      
    },
    async getStudentData() {
      const { data } = await this.$axios.get(
        "/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },
    async getSemesterData() {
      const { data } = await this.$axios.get(
        "/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },

    async onSubmit() {
      const { data } = await this.$axios.put(
        "/calendar/update/" + this.$route.query.id,
        {
          Note_title: this.calendar.Note_title,
          Note_type: this.calendar.Note_type,
          Note_location: this.calendar.Note_location,
          Note_date: this.calendar.Note_date,
          Note_time: this.calendar.Note_time,
          Note_detail: this.calendar.Note_detail,
        }
      );
      this.calendar = data.calendar;
      this.$router.push({
        path: "/Event",
        query: {
          id: this.calendar.NoteID,
          uid: this.student.uid,
          SemesterID: this.getchangSemester,
        },
      });
    },
  },
};
</script>



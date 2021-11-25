<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'calendar',
              query: {
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
          @click="
            $router.push({
              name: 'editevent',
              query: {
                id: calendar.NoteID,
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          round
          dense
          text-color="white"
          icon="settings"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">
        {{ calendar.Note_title }}
      </div>
    </div>

    <div class="item-center q-ml-lg q-mr-lg q-mt-lg" style="overflow: hidden">
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">Type :</div>

        <div class="row justify-center">
          <div class="self-center text-bold q-ml-md">
            <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
              {{ calendar.Note_type }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

    <div class="item-center q-ml-lg q-mr-lg" style="overflow: hidden">
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">
          Location :
        </div>

        <div class="row justify-center">
          <div class="self-center text-bold q-ml-sm">
            <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
              {{ calendar.Note_location }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

    <div class="item-center q-ml-lg q-mr-lg" style="overflow: hidden">
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">Date :</div>

        <div class="row justify-center">
          <div class="self-center text-bold q-ml-sm">
            <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
              {{ formatDate(calendar.Note_date) }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

    <div class="item-center q-ml-lg q-mr-lg" style="overflow: hidden">
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">Time :</div>

        <div class="row justify-center">
          <div class="self-center text-bold q-ml-sm">
            <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
              {{ calendar.Note_time }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

    <div class="item-center q-ml-lg q-mr-lg" style="overflow: hidden">
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">Note :</div>

        <div class="row justify-center">
          <div class="self-center text-bold q-ml-sm">
            <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
              {{ calendar.Note_detail }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            no-caps
            class="btn-fixed-width"
            rounded
            style="background: #ff5656; color: white"
            label="Delete"
            @click="DeleteEvent()"
          />
        </div>
      </div>
    </div>

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

    async DeleteEvent() {
      await this.$axios.delete("/calendar/delete/" + this.$route.query.id)
        .then((response) => {
          console.log(response);
        });
      await this.$router.push({
        path: "/Calendar",
        query: {
          uid: this.student.uid,
          SemesterID: this.getchangSemester,
        },
      });
    },
  },
};
</script>





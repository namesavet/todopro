<template>
  <q-page class="addbackground">
    <q-form @submit="onSubmit()">
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

        <q-btn
          flat
          dense
          text-color="white"
          icon="done"
          class="q-mr-xs"
          style="background-color: #40df9f"
          type="submit"
        />
      </q-toolbar>

      <div class="row justify-center">
        <div class="text-white text-bold" style="font-size: 30px">
          New activity
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
            v-model="Note_title"
            label="Title"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
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
            v-model="Note_type"
            :options="types"
            label="type"
            color="black"
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
            v-model="Note_location"
            label="Location"
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            required
          />
        </div>
      </div>

      <div class="">
        <div class="col-2 item-center q-ml-lg q-mr-lg" style="overflow: hidden">
          <div class="text-white text-bold" style="font-size: 25px">Date</div>
        </div>

        <div class="col-8 q-ml-lg q-mr-lg q-gutter-xs">
          <q-input
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            filled
            v-model="Note_date"
            mask="date"
            :rules="['date']"
            required
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="Note_date">
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
            color="white"
            :input-style="{ color: 'white' }"
            label-color="grey"
            filled
            v-model="Note_time"
            mask="time"
            :rules="['time']"
            required
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer" color="white">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="Note_time">
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
          v-model="Note_detail"
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
export default {
  data() {
    return {
      Note_title: "",
      Note_type: "",
      types: ["Homework", "Test", "Other"],
      Note_location: "",
      Note_date: "",
      Note_time: "",
      Note_detail: "",
      student: {},
      semester: {},
      uid: this.$route.query.uid,
      SemesterID: this.$route.query.SemesterID,
      getchangSemester: "",
    };
  },
  mounted() {
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
  },
  methods: {
    getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
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
      await this.$axios.post("/calendar/create", {
          Note_title: this.Note_title,
          Note_type: this.Note_type,
          Note_location: this.Note_location,
          Note_date: this.Note_date,
          Note_time: this.Note_time,
          Note_detail: this.Note_detail,
          uid: this.$route.query.uid,
          SemesterID: this.$route.query.SemesterID,
        })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/Calendar",
        query: {
          uid: this.uid,
          SemesterID: this.getchangSemester,
        },
      });
    },
  },
};
</script>





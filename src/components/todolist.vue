<template>
  <div>
    <div class="row justify-center q-px-md">
      <div class="today">
        <div class="texttitle q-mt-sm q-ml-lg">TO DO TODAY</div>
        <div :key="index" v-for="(calendar, index) in calendars">
          <div class="TextNoteTitle q-mt-sm q-ml-lg">
            - {{ calendar.Note_title }}
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="row justify-center q-ml-md q-mr-sm q-mt-md">
          <div
            class="subject text-center"
            @click="$router.push({ name: 'subject' ,
             query: {
              uid: student.uid,
              
            }, })"
            push
            style="overflow: hidden"
          >
            <div class="texttitle1 q-mt-sm">Subject</div>

            <q-img
              src="../image/subject.png"
              style="height: 100%; max-width: 160px"
            />
          </div>
        </div>

        <div class="row justify-center q-ml-md q-mr-sm q-mt-md">
          <div
            class="read text-center"
            @click="$router.push({ name: 'Readbook' })"
            push
            style="overflow: hidden"
          >
            <div class="texttitle2 q-ml-lg q-mt-sm">
              <div class="row">Read</div>
              <div class="row">a book</div>

              <q-img
                src="../image/read.png"
                style="height: 100%; max-width: 85px"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="row justify-center q-mr-md q-ml-sm q-mt-md">
          <div
            class="test text-center"
            @click="$router.push({ name: 'testandscore' })"
            push
            style="overflow: hidden"
          >
            <div class="texttitle2 q-ml-lg q-mt-sm">
              <div class="row">Test</div>
              <div class="row">and</div>
              <div class="row">Score</div>

              <div id="testimg">
                <q-img
                  src="../image/test.png"
                  style="height: 100%; max-width: 190px"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center q-mr-md q-ml-sm q-mt-md">
          <div
            class="calendar text-center"
            @click="$router.push({ name: 'calendar' })"
            push
            style="overflow: hidden"
          >
            <div class="texttitle1 q-mt-sm">Calendar</div>

            <q-img
              src="../image/calendar.png"
              style="height: 100%; max-width: 170px"
            />
          </div>
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
          <q-btn flat name="calendar" icon="calendar_today" />
          <q-btn flat name="home" icon="home" />
          <q-btn flat name="book" icon="menu_book" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
import axios from "axios";
import { date } from "quasar";
export default {
  name: "Todolist",
  data() {
    return {
      calendars: [],
      date: " ",
      events: [],
      ListAllEvent: [],
      student:{},
    };
  },
  mounted() {
    this.getCalendarData();
    this.getStudentData();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getCalendarData() {
      const { data } = await axios.get(
        "http://localhost:3000/calendar/72100d56-21ae-42fd-8167-0b5c49c68b1d"
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

<style scoped>
.today {
  width: 100%;
  min-height: 180px;
  background: #6952dc;
  border-radius: 25px;
  background-image: url("../image/today.png");
  background-size: 100%;
  background-repeat: none;
}
.subject {
  width: 100%;
  height: 180px;
  background: #ff974a;
  border-radius: 15px;
}
.read {
  width: 100%;
  height: 210px;
  background: #ff565e;
  border-radius: 15px;
}
.test {
  width: 100%;
  height: 210px;
  background: #3ed598;
  border-radius: 15px;
}
.calendar {
  width: 100%;
  height: 180px;
  background: #ffc542;
  border-radius: 15px;
}
.texttitle1 {
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.texttitle2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.texttitle {
  font-size: 25px;
  font-weight: bold;
  color: white;
}
.TextNoteTitle {
  font-size: 15px;
  font-weight: bold;
  color: white;
}
#testimg {
  -webkit-box-reflect: below -10px -webkit-gradient(
      linear,
      right top,
      right bottom,
      from(transparent),
      color-stop(50%, transparent),
      to(rgba(255, 255, 255, 0.5))
    );
}
</style>

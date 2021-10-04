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
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">
            Subject
          </div>
        </div>
      </div>



      <div :key="index" v-for="(subject,index) in subjects">
        <div
          class="row justify-center"
          @click="$router.push({ name: 'subjectchapter' })"
          push
        >
          <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon name="school" style="color: #ffffff; font-size: 25px">
              </q-icon>
            </div>
          </div>

          <div class="col self-center q-ml-md">
            <div class="text-white">{{subject.Subject_name}}</div>
            <div class="text-blue-grey-4">{{subject.Teacher_name}}</div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
      </div>

    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            @click="$router.push({ name: 'selectaddsubject' })"
            push
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
      <div class="fontaddsubject">Add Subject</div>
    </div>

    <div class="row q-mt-xl">
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
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      subjects: [],
    };
  },
  mounted() {
    this.getSubjectData();
  },
  methods: {
    async getSubjectData() {
      const {data} = await axios.get(
        "http://localhost:3000/subject/72100d56-21ae-42fd-8167-0b5c49c68b1d"
      );
      this.subjects = data.subject;
    },
  },
};
</script>

<style scoped>
</style >
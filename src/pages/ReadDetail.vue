<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Readbook' })"
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

<div  >
    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">{{subjects[0].Subject_name}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md">
        <div class="text-bold" style="font-size: 22px; color: #96a7af">
          {{subjects[0].Teacher_name}}
        </div>
      </div>
    </div>

    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="star" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">{{subjects[0].Subject_name}}</div>
            </div>
            <div class="col-3">
              <div class="percenyellow">66%</div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress4"
              color="yellow"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row q-ml-xl q-mt-lg">
      <div class="q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-mx-sm">
        <div class="exam">Midterm exam</div>
      </div>
      <div class="col-4 q-mx-xs">
        <div class="exam">{{ formatDate(subjects[0].Date_midterm_exam) }}</div>
      </div>
      <div class="col">
        <div class="exam">{{subjects[0].Score_midterm}}%</div>
      </div>
    </div>

    <div class="row q-ml-xl q-mt-sm justify-around">
      <div class="q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-mx-sm">
        <div class="exam">Final exam</div>
      </div>
      <div class="col-4 q-mx-xs">
        <div class="exam">{{ formatDate(subjects[0].Date_final_exam) }}</div>
      </div>
      <div class="col">
        <div class="exam">{{subjects[0].Score_final}}%</div>
      </div>
    </div>
</div>
    <div class="row">
      <div
        class="col q-my-md q-ml-md text-white text-bold"
        style="font-size: 25px"
      >
        Chapter
      </div>
      <div class="col-2 q-mt-md">
        <q-icon
          name="chrome_reader_mode"
          class="q-ml-sm"
          size="24px"
          style="color: #42ff4a"
        />
      </div>
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div :key="index" v-for="(chapter, index) in chapters">
        <div class="row justify-center">
          <div class="profilechap text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">{{index+1}}</div>
          </div>

          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              {{ chapter.Chapter_name }}
            </div>
          </div>
          <div class="col-2">
            <q-checkbox name="read" v-model="ch1" color="green" />
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>

      </div>
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
import {date} from "quasar";
export default {
  data() {
    return {
      progress4: 0.66,
      ch1: false,
      ch2: false,
      ch3: false,
      chapters: [],
      subjects: [],
      countchapter:0,
      
    };
  },
  mounted() {
    this.getSubjectData();
    this.getChapter();
  },
  methods: {
    formatDate(day){
      return date.formatDate(day,"DD MMM YYYY")

    },
    async getSubjectData() {
      const resp = await axios.get(
        "http://localhost:3000/subject/findsubject/847f4921-3408-4abe-a2a4-96fc01f49aaa"
      );
      this.subjects = resp.data.subject;
      const url =
        "http://localhost:3000/chapter/847f4921-3408-4abe-a2a4-96fc01f49aaa";
      const chaptersp = await axios.get(url);
      this.chapters = chaptersp.data.chapter;
      
      this.countchapter = this.chapters.length
    },
    async getChapter() {},
  },
};
</script>

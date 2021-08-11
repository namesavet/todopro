<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'subjectscore' })"
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
          @click="$router.push({ name: 'subjectscore' })"
          push
          text-color="white"
          icon="done"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">SPI</div>
        </div>
        <div class="text-blue-grey-4">ดร.กุลศิริ</div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Midterm exam
          </div>
          <div
            class="col q-my-md q-mr-sm text-white text-bold text-right"
            style="font-size: 16px"
          >
            15/30
          </div>
          <div class="col-1  q-mt-sm q-mr-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress1"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            test1
          </div>
          <div
            class="col q-my-md q-mr-sm text-white text-bold text-right"
            style="font-size: 16px"
          >
            10/15
          </div>
          <div class="col-1  q-mt-sm q-mr-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress2"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Homework1
          </div>
          <div
            class="col q-my-md q-mr-sm text-white text-bold text-right"
            style="font-size: 16px"
          >
            30/30
          </div>
          <div class="col-1  q-mt-sm q-mr-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress3"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>

    <div id="app" class="container">
      <form>
        <div class="work-experiences">
          <div class="form-row" v-for="(input, index) in chapter" :key="index">
            <div class="row justify-center">
              <div class="score">
                <div class="row">
                  <div class="col">
                    <div
                      class="row text-white text-bold q-ml-lg  q-mb-md"
                      style="font-size: 16px; height: 20%"
                    >
              
                      <q-input
                      :input-style="{ color: 'white' }"
                        v-model="input.scoreName"
                        placeholder="Name of score"
                        color="white"
                        label-color="grey"
                    
                      />
                    </div>
                    <div
                      class="row text-white text-bold q-ml-lg "
                      style="font-size: 16px; height: 100%"
                    >
                    <div class="col">
                         <q-input
                      :input-style="{ color: 'white' }"
                        v-model="input.getPoin"
                        placeholder="Get poin"
                        color="white"
                        label-color="grey"
                      />
                    </div>
                    <div class="col q-ml-lg">
                         <q-input
                      :input-style="{ color: 'white' }"
                        v-model="input.getPoin"
                        placeholder="Chapter name"
                        color="white"
                        label-color="grey"
                      />
                    </div>
                   
                    </div>
                  </div>
                  <div class="col-2 items-center text-center">
                    <div class="row q-mt-sm justify-center">
                      <q-btn
                        @click="removeField(index, chapter)"
                        round
                        dense
                        text-color="white"
                        icon="done"
                        class=""
                        style=" background-color: #40df9f"
                      />
                    </div>
                    <div class="row q-mt-md justify-center">
                      <q-btn
                        @click="removeField(index, chapter)"
                        round
                        dense
                        text-color="white"
                        icon="clear"
                        class=""
                          style=" background-color: #FF5656"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            @click="addChapter"
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

      <div class="row items-center justify-center">
        <div class="fontaddsubject" style="color: #40df9f">Add Score</div>
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
export default {
  data() {
    return {
      chapter: [
        {
          chapterName: "Foxconn",
        },
      ],
      progressall: 0.28,
      progress1: 0.5,
      progress2: 0.66,
      progress3: 1,
    };
  },

  methods: {
    addChapter() {
      this.chapter.push({
        chapterName: "",
      });
    },
    removeField(index, chapter) {
      //type.splice(index, 1);
      chapter.splice(index, 1);
    },

    submit() {
      const data = {
        chapter: this.chapter,
      };
      alert(JSON.stringify(data, null, 2));
    },
  },
};
</script>

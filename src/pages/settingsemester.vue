<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'semester' })"
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
          @click="$router.push({ name: 'semester' })"
          push
          text-color="white"
          icon="done"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Semester</div>
      </div>
    </div>

    <div class="row justify-center text-right" style="margin-top: 15%">
      <div class="col-5 q-ml-md">
        <div class="semestertitle q-mt-sm">1/2021</div>
      </div>
      <div class="col-4 q-ml-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top: 15%">
      <div class="col-5 q-ml-md">
        <div class="semestertitle q-mt-sm">2/2020</div>
      </div>
      <div class="col-4 q-ml-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top: 15%">
      <div class="col-5 q-ml-md">
        <div class="semestertitle q-mt-sm">1/2020</div>
      </div>
      <div class="col-4 q-ml-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top: 15%">
      <div class="col-5 q-ml-md">
        <div class="semestertitle q-mt-sm">2/2019</div>
      </div>
      <div class="col-4 q-ml-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
    </div>
    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div class="row justify-center text-right" style="margin-top: 15%">
      <div class="col-5 q-ml-md">
        <div class="semestertitle q-mt-sm">1/2019</div>
      </div>
      <div class="col-4 q-ml-md">
        <q-btn flat round dense text-color="red" icon="delete_forever" />
      </div>
    </div>

    <div class="q-mx-lg q-mt-sm">
      <q-separator color="grey" inset />
    </div>

    <div id="app" class="container">
      <form>
        <div class="form-row" v-for="(input, index) in chapter" :key="index">
          <div class="row justify-center" style="margin-top: 11%">
            <div class="col-7 q-ml-md">
              <div class="semestertitle q-mt-sm">
                  <q-input
                    :input-style="{ color: 'white' }"
                    color="white"
                    v-model="input.chapterName"
                    label-color="grey"
                     placeholder="Chapter name"
                  />

              </div>
            </div>
            <div class="q-mr-sm q-mt-sm">
              <q-btn
                @click="removeField(index, chapter)"
                round
                dense
                text-color="white"
                icon="done"
                class=""
                style="background-color: #40df9f"
              />
            </div>
            <div class="q-mr-sm q-mt-sm">
              <q-btn
                @click="removeField(index, chapter)"
                round
                dense
                text-color="white"
                icon="clear"
                class=""
                style="background-color: #ff5656"
              />
            </div>
          </div>
          <div class="q-mx-lg q-mt-sm">
            <q-separator color="grey" inset />
          </div>
        </div>
      </form>
    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
        <div class="row items-center justify-center q-mt-xl">
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
    </div>

    <div class="row items-center justify-center">
      <div class="fontaddsubject">Add Semester</div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "app",

  data: () => ({
    chapter: [
      {
        chapterName: "",
      },
    ],
  }),

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


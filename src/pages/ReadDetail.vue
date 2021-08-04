<template>
  <q-page class="readdetail">
    <q-toolbar>
      <q-toolbar-title>
          <q-btn
            flat
              @click="$router.push({ name: 'Read abook' })"
            push
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">SPI</div>
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md">
        <div class="text-bold" style="font-size: 22px; color: #96a7af">
          ดร.กุลศิริ
        </div>
      </div>
    </div>

    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon
                name="star"
                class=""
                size="24px"
                style="color: white"
              />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">SPI</div>
            </div>
            <div class="col-3">
              <div class="percenyellow">66%</div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              stripe
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
      <div class="q-ml-xs q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-ml-sm">
        <div class="exam">Midterm exam</div>
      </div>
      <div class="col-4 q-ml-xs">
        <div class="exam">08 May 2020</div>
      </div>
      <div class="col">
        <div class="exam">30%</div>
      </div>
    </div>

    <div class="row q-ml-xl q-mt-sm">
      <div class="q-ml-xs q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-ml-sm">
        <div class="exam">Final exam</div>
      </div>
      <div class="col-4 q-ml-xs">
        <div class="exam">18 May 2020</div>
      </div>
      <div class="col">
        <div class="exam">30%</div>
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Chapter</div>
      </div>
      <div class="col-2 q-mt-md ">
        <q-icon
          name="chrome_reader_mode"
          class="q-ml-sm"
          size="24px"
          style="color: #42ff4a"
        />
      </div>
    </div>

    <div class="row items-center q-mt-md">
      <div class="col">
        <div
          class="bnumberchapter q-ml-md"
          style="overflow: hidden; background: #ffc542"
        >
          <div class="row text-center justify-center q-mt-sm">
            <div class="numberchapter">1</div>
          </div>
        </div>
      </div>
      <div class="col-6 q-ml-md">
        <div class="titlechapter">Software Quality</div>
      </div>
      <div class="col-2">
        <q-checkbox
          name="read"
          v-model="ch1"
          color="green"
        />
      </div>
    </div>

    <div class="q-mr-lg q-my-md">
      <q-separator color="grey" inset="item" />
    </div>

    <div class="row items-center q-mt-md">
      <div class="col">
        <div
          class="bnumberchapter q-ml-md"
          style="overflow: hidden; background: #3dd598"
        >
          <div class="row text-center justify-center q-mt-sm">
            <div class="numberchapter">2</div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="titlechapter">Software Quality Factor</div>
      </div>

      <div class="col-2">
         <q-checkbox
          name="read"
          v-model="ch2"
          color="green"
        />
      </div>
    </div>

    <div class="q-mr-lg q-my-md">
      <q-separator color="grey" inset="item" />
    </div>

    <div class="row items-center q-mt-md">
      <div class="col">
        <div
          class="bnumberchapter q-ml-md"
          style="overflow: hidden; background: #ff565e"
        >
          <div class="row text-center justify-center q-mt-sm">
            <div class="numberchapter">3</div>
          </div>
        </div>
      </div>
      <div class="col-6 q-ml-md">
        <div class="titlechapter">Software Quality improvement</div>
      </div>
      <div class="col-2">
        <q-checkbox
          name="read"
          v-model="ch3"
          color="green"
        />
      </div>
    </div>

    <div class="q-mr-lg q-my-md">
      <q-separator color="grey" inset="item" />
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
export default {
  data() {
    return {
      progress4: 0.66,

      ch1: false,
      ch2: false,
      ch3: false,
     
    };
  },
};
</script>

<style scope>
.readdetail{
  background: #22343c;
}
.namebook{
  width: 90%;
  height: 99px;
  background: #30444E;
  border-radius:25px;
  margin-left: 5%; 
  margin-top: 5%;
}
.exam {
  font-size: 15px;
  color: #96a7af;
  font-weight: bold;
}
.redcircle {
  width: 10px;
  height: 10px;
  background: #ff565e;
  border-radius: 100%;
}
.bnumberchapter {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.numberchapter {
  font-size: 25px;
  color: white;
  font-weight: bold;
}
.titlechapter {
  font-size: 15px;
  color: white;
  font-weight: bold;
}
.titlesubject{
  font-size: 15px;
  color: white;
  font-weight: bold;
}
.statusyellow{
  width: 59px;
  height: 54px;
  background: #FFC542;
  border-radius:15px;
}
.percenyellow{
  font-size: 15px;
  color: #FFC542;
  font-weight: bold;
}
</style>
<template>
  <q-page class="readdetail">
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

    <div class="row q-ml-xl q-mt-lg ">
      <div class="q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-mx-sm">
        <div class="exam">Midterm exam</div>
      </div>
      <div class="col-4 q-mx-xs">
        <div class="exam">08 May 2020</div>
      </div>
      <div class="col">
        <div class="exam">30%</div>
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
        <div class="exam">18 May 2020</div>
      </div>
      <div class="col">
        <div class="exam">30%</div>
      </div>
    </div>

    <div class="row">
      <div
        class="col q-my-md q-ml-md text-white text-bold"
        style="font-size: 25px"
      >
        Chapter
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

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div>
        <div class="row justify-center">
          <div class="profilesubject1 text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">1</div>
          </div>

          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Software Quality
            </div>
          </div>
          <div class="col-2">
            <q-checkbox name="read" v-model="ch1" color="green" />
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center">
          <div class="profilesubject2 text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">2</div>
          </div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Software Quality Factor
            </div>
          </div>
          <div class="col-2">
            <q-checkbox name="read" v-model="ch2" color="green" />
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center">
          <div class="profilesubject3 text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">3</div>
          </div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Software Process Improvment
            </div>
          </div>
          <div class="col-2">
            <q-checkbox name="read" v-model="ch3" color="green" />
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
.readdetail {
  background: #22343c;
}
.namebook {
  width: 90%;
  height: 99px;
  background: #30444e;
  border-radius: 25px;
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
.titlesubject {
  font-size: 15px;
  color: white;
  font-weight: bold;
}
.statusyellow {
  width: 59px;
  height: 54px;
  background: #ffc542;
  border-radius: 15px;
}
.percenyellow {
  font-size: 15px;
  color: #ffc542;
  font-weight: bold;
}

.profilesubject1 {
  width: 50px;
  height: 50px;
  background: #ffc542;
  border-radius: 100%;
}

.profilesubject2 {
  width: 50px;
  height: 50px;
  background: #3ed598;
  border-radius: 100%;
}

.profilesubject3 {
  width: 50px;
  height: 50px;
  background: #ff565e;
  border-radius: 100%;
}
.chapter {
  font-size: 22px;
  color: white;
}
</style>
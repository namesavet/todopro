<template>
  <q-page class="subject">
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
        <div class="settingbtn">
          <q-btn
            flat
            round
            dense
            @click="$router.push({ name: 'addcalendar' })"
            push
            text-color="white"
            icon="add"
            class=""
          />
        </div>
    </q-toolbar>

    <div class="items-center">
      <div class="q-gutter-md text-white text-center">
        <q-date
          style="background-color: #2a3c44; width: 95%; height: 380px"
          v-model="date"
          color="orange"
          :events="events"
          :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'orange')"
        />
      </div>
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs q-mt-lg">
      <div>
       
          <div class="row justify-center"  @click="$router.push({ name: 'event' })"
          push>
            <div class="typetest"></div>
            <div class="col self-center text-bold q-ml-lg">
              <div class="text-white text-bold" style="font-size: 16px">
                Test 1
              </div>
            </div>
          </div>

          <div class="q-my-lg">
            <q-separator color="grey" inset="" />
          </div>


        <div class="row justify-center">
          <div class="typeother"></div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Test 3
            </div>
          </div>
        </div>

        <div class="q-my-lg">
          <q-separator color="grey" inset="" />
        </div>

        <div class="row justify-center">
          <div class="typehomework"></div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              homework spi
            </div>
          </div>
        </div>
        <div class="q-my-lg">
          <q-separator color="grey" inset="" />
        </div>
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
  name: "calendar",
  data() {
    return {
      date: "2021/07/26",
      events: [
        "2021/07/01",
        "2021/07/05",
        "2021/07/06",
        "2021/07/09",
        "2021/07/23",
      ],
      eventsFn(date) {
        if (
          date === "2021/07/01" ||
          date === "2021/07/05" ||
          date === "2021/07/06" ||
          date === "2021/07/09" ||
          date === "2021/07/23"
        ) {
          return true;
        }
        return false;
      },
    };
  },
};
</script>

<style scoped>
.typetest {
  width: 24px;
  height: 24px;
  background: #ff575f;
  border-radius: 15%;
}
.typehomework {
  width: 24px;
  height: 24px;
  background: #3dd598;
  border-radius: 15%;
}
.typeother {
  width: 24px;
  height: 24px;
  background: #ffc542;
  border-radius: 15%;
}
.subject {
  background: #22343c;
}
.score {
  width: 317px;
  height: 100px;
  background: #2a3c44;
  border-radius: 25px;
  margin-top: 10px;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
.warringscore {
  width: 317px;
  height: 55px;
  background: #ff5656;
  border-radius: 25px;
  margin-top: 10px;
}
.scoregrade {
  width: 271px;
  height: 268px;
  background: #2a3c44;
  border-radius: 25px;
}
</style >

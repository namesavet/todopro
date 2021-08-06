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
              Other
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


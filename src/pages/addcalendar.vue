<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'calendar' })"
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
        @click="$router.push({ name: 'calendar' })"
        text-color="white"
        icon="done"
        class="q-mr-xs"
        style="background-color: #40df9f"
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
              style="color: #FFC542"
            />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
          v-model="Title"
          label="Title"
          color="white"
          :input-style="{ color: 'white' }"
          label-color="grey"
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
              style="color: #FFC542"
            />
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-select
          v-model="type"
          :options="types"
          label="type"
          color="black"
          
          label-color="grey"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div class="bgtitle" style="overflow: hidden">
        <div class="col-2 item-center">
          <div class="row items-center justify-center q-mt-sm">
           <q-icon
              name="location_on"
              size="30px"
              style="color: #FFC542"
            />
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
          v-model="Location"
          label="Location"
          color="white"
          :input-style="{ color: 'white' }"
          label-color="grey"
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
        v-model="date" 
        mask="date" 
        :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="white">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
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
        v-model="time" 
        mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer" color="white">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="time">
                  <div class="row items-center justify-end">
                    <q-btn 
                    v-close-popup 
                    label="Close" 
                    color="primary" 
                    flat 
                    
                    />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <div class="q-ml-lg text-white text-bold" style="font-size: 25px">Note</div>

    <div class="item-center text-center q-ml-lg q-mr-lg">
      <q-input
        v-model="text"
        filled
        type="textarea"
        color="white"
        :input-style="{ color: 'white' }"
        label-color="grey"
      />
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
      Title: "",
      Location: "",
      text: "",
      date: "2021/08/26",
      time: "10:56",
      type: null,
      types: ["Homework", "Test", "Other"],

    };
  },
};
</script>





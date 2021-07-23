<template>
  <q-page class="addsub">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtoevent">
          <q-btn
            flat
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
        </router-link>
      </q-toolbar-title>

      <router-link to="backtoevent">
        <div class="settingbtn">
          <q-btn flat round dense text-color="white" icon="done" class="" />
        </div>
      </router-link>
    </q-toolbar>

    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">Edit Event</div>
    </div>

    <div class="row justify-center q-mt-lg">
      <div class="bgtitle" style="overflow: hidden">
        <div class="col-2">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/book.png"
              style="height: 70%; max-width: 70%"
            />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Title" label-color="#96A7AF" label="Title" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="bgtitle" style="overflow: hidden">
        <div class="col-2">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/book.png"
              style="height: 70%; max-width: 70%"
            />
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Location" label-color="#96A7AF" label="Location" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="bgtitle" style="overflow: hidden">
        <div class="col-2 item-center">
          <div class="row items-center justify-center q-mt-sm">
            <!-- <q-img
              src="../image/people.png"
              style="height: 70%; max-width: 60%"
            /> -->
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Subject" label-color="#96A7AF" label="Location" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="bgtitle" style="overflow: hidden">
        <div class="col-2 item-center">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/people.png"
              style="height: 70%; max-width: 60%"
            />
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Subject" label-color="#96A7AF" label="Subject" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-2 item-center" style="overflow: hidden">
        <div class="text-white text-bold" style="font-size: 25px">Date</div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Subject" label-color="#96A7AF" label="Subject" />
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-2 item-center">
        <div class="text-white text-bold" style="font-size: 25px">Time</div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input v-model="Subject" label-color="#96A7AF" label="Subject" />
      </div>
    </div>

    <div class="q-ml-lg text-white text-bold" style="font-size: 25px">Note</div>

    <div class="item-center text-center q-pa-md">
      <q-input v-model="text" filled type="textarea" />
    </div>

    <div class="q-mt-lg row justify-center">
      <q-btn style="background: #ff565e; color: white" label="Delete" />
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Title: "",
      Location: "",
      Subject: "",
      text: "",
    };
  },
};
</script>

<style scoped >
.addsub {
  background: #22343c;
}

.bgtitle {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15%;
}
.profile {
  width: 65px;
  height: 66px;
  background: #ff565e;
  border-radius: 50%;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
</style>



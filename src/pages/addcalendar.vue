<template>
  <q-page class="addsub">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtocalendar">
          <q-btn
            flat
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
        </router-link>
      </q-toolbar-title>

      <router-link to="backtocalendar">
        <q-btn
          flat
          dense
          text-color="white"
          icon="done"
          class="q-mr-xs"
          style="background-color: #40df9f"
        />
      </router-link>
    </q-toolbar>

    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">New event</div>
    </div>

    <div class="row justify-center q-mt-lg">
      <div class="sname" style="overflow: hidden">
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
      <div class="inname" style="overflow: hidden">
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
      <div class="teaname" style="overflow: hidden">
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
      <div class="teaname" style="overflow: hidden">
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

    
  <div class="row">
    <div class="col-2 item-center">
      <div class="text-white text-bold" style="font-size: 25px">
        Description
      </div>
    </div>

  </div>
     
 
    <div class="item-center q-pa-md" style="max-width: 500px">
      <q-input v-model="text" filled type="textarea" />
    </div>
    
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
.sname {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15%;
}
.inname {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15%;
}
.teaname {
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
</style>



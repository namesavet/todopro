<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'profile' })"
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>
    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">Profile</div>
    </div>

    <div class="row justify-center q-mb-xl">
      <div class="text-center">
        <div class="borderdash row justify-center items-center">
          <div class="profileImg">
            <q-img
              src="../image/profile.png"
              style="height: 100%; max-width: 100%; border-radius: 20%"
            />
          </div>
        </div>
      </div>
    </div>
<div class="row ">
  <div class="col ">
    <div class="row q-mt-md">
      <div class="col text-right">
        <div class="titleprofile">Student ID</div>
      </div>
      <div class="col-6  text-left q-mt-sm q-ml-md">
        <div class="titleprofiledetail">6130613034</div>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col text-right">
        <div class="titleprofile">Name</div>
      </div>
      <div class="col-6 text-left q-mt-sm q-ml-md">
        <div class="titleprofiledetail">Pongsavet phukaet</div>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col text-right">
        <div class="titleprofile">Major</div>
      </div>
      <div class="col-6 text-left q-mt-sm q-ml-md">
        <div class="titleprofiledetail">Software Engineering</div>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col text-right">
        <div class="titleprofile">Faculty</div>
      </div>
      <div class="col-6 text-left q-mt-sm q-ml-md">
        <div class="titleprofiledetail">College of computing</div>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col text-right">
        <div class="titleprofile">Campus</div>
      </div>
      <div class="col-6 text-left q-mt-sm q-ml-md">
        <div class="titleprofiledetail">
          Prince of songkla university phuket campus
        </div>
      </div>
    </div>
  </div>
</div>
    <div class="col items-center" style="margin-top: 50%">
      <div class="row justify-center">
        <div
          class="redbutton"
          @click="$router.push({ name: 'profile' })"
          push
          style="overflow: hidden"
        >
          <div class="col text-center q-mt-md">
            <div class="text-bold text-white" style="font-size: 16px">Done</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>


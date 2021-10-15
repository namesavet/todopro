<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <!-- <div class="texttitle1 q-ml-lg q-mt-lg">Information</div> -->
      <div class="texttitle2 q-ml-lg q-mt-sm">Information</div>

      <div class="row justify-center items-center q-mt-md">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon name="credit_card" size="30px" style="color: #ffc542" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="StudentID"
            label-color="grey"
            label="StudentID"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter studentID',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon name="school" size="30px" style="color: #ffc542" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Major"
            label-color="grey"
            label="Major"
            color="white"
            :rules="[(val) => (val && val.length > 0) || 'Please enter major ']"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon name="school" size="30px" style="color: #ffc542" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Faculty"
            label-color="grey"
            label="Faculty"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter faculty',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon name="school" size="30px" style="color: #ffc542" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="University"
            label-color="grey"
            label="University"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter university ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon name="cast_for_education" size="30px" style="color: #ffc542" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Semester_name"
            label-color="grey"
            label="1/2020"
            mask="#/####"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter Semester ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Createaccount2' })"
            push
            align="center"
            no-caps
            icon-right="arrow_back"
            size="20px"
            style="width: 50px; background: #286053; color: #3dd598"
          />
        </div>
        <div class="button-next q-mt-lg q-ml-md">
          <q-btn
            @click="gotocreateaccount4()"
            push
            align="center"
            no-caps
            label="Next "
            icon-right="arrow_forward"
            size="20px"
            style="width: 250px; background: #40df9f; color: white"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      StudentID: "",
      Major: "",
      Faculty: "",
      University: "",
      Semester_name:"",
    };
  },
  methods: {
    gotocreateaccount4() {
      console.log(this.StudentID);
      console.log(this.Major);
      console.log(this.Faculty);
      console.log(this.University);
      console.log(this.Semester_name);
      this.$router.push({
        path: "/Createaccount4",
      });
    },
  },
};
</script>

<style scoped>
</style>
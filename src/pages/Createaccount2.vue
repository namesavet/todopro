<template>
  <q-page class="addbackground q-pt-xs">
    <div class="col edit-space">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Information</div>
      <form @submit.prevent="onSubmit">
        <div class="row justify-center items-center q-mt-md">
          <div class="icon_Profile" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="StudentID"
              label-color="grey"
              label="StudentID"
              mask="##########"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter StudentID ',
              ]"
            />
          </div>
        </div>
        <div class="row justify-center items-center">
          <div class="icon_Profile" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="Fullname"
              label-color="grey"
              label="Fullname"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter Fullname ',
              ]"
            />
          </div>
        </div>
        <div class="row justify-center items-center">
          <div class="icon_Profile" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="Name"
              label-color="grey"
              label="Lastname"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter Lastname ',
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
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="Major"
              label-color="grey"
              label="Major"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter Major ',
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
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="Faculty"
              label-color="grey"
              label="Faculty"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter Faculty',
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
              required
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="University"
              label-color="grey"
              label="University"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter University ',
              ]"
            />
          </div>
        </div>
        <div>
          <div class="row justify-center">
            <div class="button-next q-mt-lg q-ml-md">
              <q-btn
                type="submit"
                value="onSubmit"
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
      </form>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      StudentID: "",
      Fullname: "",
      Name: "",
      Major: "",
      Faculty: "",
      University: "",
      uid: this.$route.query.uid,
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/student/create", {
          StudentID: this.StudentID,
          Name: this.Name,
          Fullname: this.Fullname,
          Major: this.Major,
          Faculty: this.Faculty,
          University: this.University,
          uid: this.$route.query.uid,
        })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/Createaccount3",
        query: {
          uid: this.uid,
        },
      });
    },
  },
};
</script>

<style scoped>
</style>






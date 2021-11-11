<template>
  <q-page class="addbackground q-pt-xs">
    <div class="col edit-space">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Information</div>
      <q-form>
        <div class="row justify-center items-center q-mt-md">
          <div class="icon_Profile" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
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
      </q-form>
      <div>
        <div class="row justify-center">
          <div class="button_back q-mb-xl q-mt-lg">
            <q-btn
              @click="$router.push({ name: 'Createaccount1' })"
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
              @click="onSubmit()"
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
      console.log(
         this.$route.query.uid,
      );
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






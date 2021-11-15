<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <form @submit.prevent="Register">
        <div class="Logo q-ml-lg"></div>
        <div class="texttitle1 q-ml-lg q-mt-lg">Hello !</div>
        <div class="texttitle2 q-ml-lg q-mt-sm">Lets introduce</div>

        <div class="row justify-center items-center q-mt-md">
          <div class="icon_Profile" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              type="text"
              placeholder="Email"
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="email"
              label-color="grey"
              label="Email"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter username ',
              ]"
            />
          </div>
        </div>

        <div class="row justify-center items-center">
          <div class="icon_Key" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="lock" size="30px" style="color: #ff575f" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              placeholder="Password"
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="password"
              label-color="grey"
              label="Create password"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter password ',
              ]"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row justify-center items-center">
          <div class="icon_Key" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="lock" size="30px" style="color: #ff575f" />
            </div>
          </div>
          <div class="col-9 q-ml-md q-gutter-xs">
            <q-input
              placeholder="Repassword"
              class="q-mt-md"
              :input-style="{ color: 'white' }"
              v-model="repassword"
              label-color="grey"
              label="Recheck password"
              color="white"
              :rules="[
                (val) => (val && val.length > 0) || 'Please enter password ',
              ]"
              :type="isPwd1 ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd1 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd1 = !isPwd1"
                />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row justify-center items-center">
          <div class="button_back q-mt-lg">
            <q-btn
              @click="$router.push({ name: 'Welcome' })"
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
              type="submit"
              value="Register"
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
      </form>
    </div>
  </q-page>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      isPwd: true,
      isPwd1: true,
    };
  },
  methods: {
    Register() {
      if (this.password === this.repassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.uid = user.uid;
            console.log(this.uid),
              this.$router.push({
                path: "/Createaccount2",
                query: { uid: this.uid },
              });
          })
          .catch((err) => alert(err.message));
      }
      else {
        alert("Please enter a new password.")
      }
    },
  },
};
</script>


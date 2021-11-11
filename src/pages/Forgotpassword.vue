<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Forgot Password</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Find your account</div>

      <div class="row justify-center items-center">
        <div class="col-10 q-mt-lg">
          <q-input
            square
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="Email"
            color="white"
            v-model="email"
            :rules="[(val) => (val && val.length > 0) || 'Please enter email ']"
          >
            <template v-slot:before>
              <q-icon name="email" color="white" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="text_OTP q-mt-lg q-ml-lg q-mr-lg">
          Please enter your email to find your account.
        </div>
      </div>

      <div class="row justify-center items-center q-mt-md">
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
            @click="resetPassword()"
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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "firebase/compat/auth";
export default {
  data() {
    return {
      email: "",
      uid: "",
    };
  },

  methods: {
    resetPassword() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          alert("Password Reset Email Sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      this.$router.push({
        path: "/Welcome",
      });
    },
  },
};
</script>

<style scoped>
</style>
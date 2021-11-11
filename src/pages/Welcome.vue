<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <form @submit.prevent="Login">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Welcome !</div>

      <div class="texttitle2 q-ml-lg q-mt-sm">Sign in to continue</div>

      <div class="row justify-center items-center  q-mt-md">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
             <q-icon
              name="perm_identity"
              size="30px"
              style="color: #FFC542"
            />
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
            label=" Email"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter username ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center  ">
        <div class="icon_Key" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon
              name="lock"
              size="30px"
              style="color: #FF575F"
            />
           
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
          
          placeholder="Password"
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="password"
            label-color="grey"
            label=" Password"
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
        <div class="button-Sign_in q-mt-lg">
          <q-btn
          type="submit" 
          value="Login"
            
            push
            align="center"
            no-caps
            label="Sign in "
            icon-right="arrow_forward"
            size="20px"
            style="width: 330px; background: #40df9f; color: white"
          />
        </div>
      </div>

  

      <div class="row justify-center items-center">
        <div class="text-forgot q-mt-md">
          <q-btn
            @click="$router.push({ name: 'Forgotpassword' })"
            label="Forgot password?"
            flat
            no-caps
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="button-Create_acc q-mt-md">
          <q-btn
            @click="gotocreateaccount1()"
            push
            align="center"
            no-caps
            label="Create an account"
            size="20px"
            style="width: 330px; background: #286053; color: #3dd598"
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
      isPwd: true,
      uid: "",
    };
  },
  methods: {
    Login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          const user = userCredential.user;
          this.uid = user.uid;
          console.log(this.uid),
            this.$router.push({
              path: "/Index",
              query: { uid: this.uid }
            });
        })
        // .then((userCredential) =>
        //   this.$router.push({
        //     path: "/Index",
        //   })
        // )
        .catch((err) => alert(err.message));
    },

    gotocreateaccount1() {
      console.log(this.Username);
      console.log(this.Password);
      this.$router.push({
        path: "/Createaccount1",
      });
    },

    gotoindex() {
      console.log(this.Username);
      console.log(this.Password);
      this.$router.push({
        path: "/Index",
      });
    },
  },
};
</script>

<style scoped>
</style>
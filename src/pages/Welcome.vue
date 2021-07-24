<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Welcome !</div>

      <div class="texttitle2 q-ml-lg q-mt-sm">Sign in to continue</div>

      <div class="row justify-center items-center q-ml-xs q-mt-xl">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/people.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            v-model="Username"
            label-color="grey"
            label=" Username"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter username ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center q-ml-xs q-mt-lg">
        <div class="icon_Key" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/key.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            v-model="Password"
            label-color="grey"
            label=" Password"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter password ',
            ]"
            :type="isPwd ? 'Password' : 'text'"
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
        <div class="button-Sign_in q-mt-md">
          <q-btn
            push
            align="center"
            no-caps
            label="Sign in with google"
            size="20px"
            style="width: 330px; background: #40df9f; color: white"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="text-forgot q-mt-md">Forgot password?</div>
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
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Username: "",
      Password: "",
      isPwd: true,
    };
  },
  methods: {
    gotocreateaccount1() {
      console.log(this.Username);
      console.log(this.Password);
      this.$router.push({
        path: "/Createaccount1",
      });
    },
  },
};
</script>

<style scoped>
.Welcome {
  background: #22343c;
}
.Logo {
  width: 15%;
  height: 50px;
  background: #40df9f;
  border-radius: 15px;
  margin-top: 100px;
}
.texttitle1 {
  font-size: 40px;
  font-weight: bold;
  color: white;
}
.texttitle2 {
  font-size: 25px;
  font-weight: bold;
  color: #96a7af;
}

.icon_Profile {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15px;
}
.icon_Key {
  width: 38px;
  height: 48px;
  background: #623a42;
  border-radius: 15px;
}
.text-forgot {
  color: #96a7af;
}
</style>
<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Welcome !</div>
      <div class="row">
        
      </div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Sign in to continue</div>

      <div class="row justify-center items-center q-ml-xs q-mt-xl">
        <div class="icon-name" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/people.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="enter-name col-9 q-ml-md q-gutter-xs">
          <q-input
            v-model="entername"
            label-color="#96A7AF"
            label="Enter name"
          />
        </div>
      </div>

      <div class="row justify-center items-center q-ml-xs q-mt-lg">
        <div class="icon-password" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/key.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="enter-name col-9 q-ml-md q-gutter-xs">
          <q-input
            v-model="enterpassword"
            label-color="#96A7AF"
            label="Enter password"
          />
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
      entername: "",
      enterpassword: "",
    };
  },
};
</script>

<style scoped>
.Welcome {
  background: #22343c;
  
}
.Logo {
  width: 50px;
  height: 50px;
  background: #40df9f;
  border-radius: 15%;
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

.icon-name {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15%;
}
.icon-password {
  width: 38px;
  height: 48px;
  background: #623a42;
  border-radius: 15%;
}
.text-forgot {
  color: #96a7af;
}
</style>
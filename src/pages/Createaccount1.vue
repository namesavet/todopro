<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Hello !</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Lets introduce</div>

      <div class="row justify-center items-center q-ml-lg q-mt-xl">
        <div class="icon-name" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/people.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="enter-name col-9 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            v-model="your_fullname"
            label-color="grey"
            label="Your full name"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your full name',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center q-ml-lg q-mt-lg">
        <div class="icon-name" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/people.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="enter-name col-9 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            v-model="username"
            label-color="grey"
            label="Username"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter username ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="button-Sign_in q-mt-lg">
          <q-btn
           @click="$router.push({name:'Welcome'})"
            push
            align="center"
            no-caps
            icon-right="arrow_back"
            size="20px"
            style="width: 50px; background: #286053; color: #3dd598"
          />
        </div>
        <div class="button-Sign_in q-mt-lg q-ml-md">
          <q-btn
            @click="gotocreateaccount2()"
            push
            align="center"
            no-caps
            label="Next "
            icon-right="arrow_forward"
            size="20px"
            style="width: 200px; background: #40df9f; color: white"
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
      your_fullname: "",
      username: "",
    };
  },
  methods:{
    gotocreateaccount2(){
      console.log(this.your_fullname);
    this.$router.push({
      path:'/Createaccount2'
    })
    }
  }
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


</style>
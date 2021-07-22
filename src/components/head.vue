<template>
  <div class="row q-pa-md  row justify-center">
    <div class="col-4 items-center justify-center">
      <div class="borderdash row justify-center items-center">
        <div class="profileImg">
          <q-img
            src="../image/profile.png"
            style="height: 100%; max-width: 100%; border-radius: 20%"
          />
        </div>
      </div>
    </div>

    <div class="col-7 q-ml-md q-mt-sm q-gutter-xs">
      <div class="row justify-between">
        <div class="text-white text-bold" style="font-size: 24px">Hello!</div>
        <q-btn rounded color="green" label="1/2021" style="height: 33px" />
      </div>
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">
          Pongsavet
        </div>
      </div>
      <div class="row justify-end">
        <q-btn
          style="font-size: 12px; height: 28px"
          rounded
          color="red"
          label="Grade summary"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.profileImg {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 20%;
}
.borderdash {
  width: 110px;
  height: 110px;
  border: dashed gray 2px;
  border-radius: 20%;
}
</style>

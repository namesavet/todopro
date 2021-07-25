<template>
  <q-page class="gradesummary ">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'profile' })"
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>
    <div class="row q-ml-md q-mt-sm q-gutter-xs">
      <div class="text-white text-bold" style="font-size: 24px">Grade summary</div>
    </div>

    <div class="row justify-center q-mb-lg">
      <div class="text-center">
        <div class="borderdash row justify-center items-center">
          <div class="profileImg">
            <q-img
              src="../image/profile.png"
              style="height: 100%; max-width: 100%; border-radius: 20%"
            />
          </div>
        </div>
      </div>
    </div>

   <div class="gradegraph" style="overflow: hidden">

   </div>

    
    
  </q-page>
</template>

<style scoped>
.gradesummary {
  background: #22343c;
}
.gradegraph{
  width: 90%;
  height: 276px;
  background: #30444e;
  border-radius: 25px;
  margin-left: 5%;
  margin-top: 4%;
}
</style>
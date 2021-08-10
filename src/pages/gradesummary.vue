<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Index' })"
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


   <div class="gradegraph" style="overflow: hidden">

   </div>

  </q-page>

  
</template>


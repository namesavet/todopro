<template>
  <div v-if="item === 'spi'">
    <div class="row justify-center">
      <div class="profilesubject" style="overflow: hidden">
        <div class="profileicon">
          <q-icon name="school" style="color: #ffffff; font-size: 25px">
          </q-icon>
        </div>
      </div>

      <div class="col self-center q-ml-md">
        <div class="text-white">SPI</div>
        <div class="text-blue-grey-4">ดร.ขวัญ</div>
      </div>
    </div>
  </div>
  <div v-else-if="item === 'datasci'">
    <div class="row justify-center">
      <div class="profilesubject" style="overflow: hidden">
        <div class="profileicon">
          <q-icon name="school" style="color: #ffffff; font-size: 25px">
          </q-icon>
        </div>
      </div>
      <div class="col self-center q-ml-md">
        <div class="text-white">Data Sci 63</div>
        <div class="text-blue-grey-4">ดร.ขวัญ</div>
      </div>
    </div>
  </div>
  <div v-else-if="item === 'ux/ui'">
    <div class="row justify-center">
      <div class="profilesubject" style="overflow: hidden">
        <div class="profileicon">
          <q-icon name="school" style="color: #ffffff; font-size: 25px">
          </q-icon>
        </div>
      </div>
      <div class="col self-center q-ml-md">
        <div class="text-white">UX/UI 63</div>
        <div class="text-blue-grey-4">ดร.ขวัญ</div>
      </div>
    </div>
  </div>

  <div v-else-if="item === 'oop'">
    <div class="row justify-center">
      <div class="profilesubject" style="overflow: hidden">
        <div class="profileicon">
          <q-icon name="school" style="color: #ffffff; font-size: 25px">
          </q-icon>
        </div>
      </div>
      <div class="col self-center q-ml-md">
        <div class="text-white">OOP 63</div>
        <div class="text-blue-grey-4">ดร.ขวัญ</div>
      </div>
    </div>
  </div>

  <div v-else-if="item === 'sw'">
    <div class="row justify-center">
      <div class="profilesubject" style="overflow: hidden">
        <div class="profileicon">
          <q-icon name="school" style="color: #ffffff; font-size: 25px">
          </q-icon>
        </div>
      </div>
      <div class="col self-center q-ml-md">
        <div class="text-white">SW Constructure</div>
        <div class="text-blue-grey-4">ดร.ขวัญ</div>
      </div>
    </div>
  </div>

  <div v-else class="row justify-center" style="color: red; margin-top: -20px">
    Can not find this ID
  </div>
</template>

<script>
export default {
  name: "SubjectList",

  props: {
    item: String,
  },
};
</script>

<style>
</style>
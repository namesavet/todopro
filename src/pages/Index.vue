<template>
  <q-page>
    <div>
      <head1 />
    </div>
    <div>
      <to-do-list />
    </div>
  </q-page>
</template>

<script>
import head1 from "../components/head.vue";
import todolist from "../components/todolist.vue";
export default {
  name: "PageIndex",
  components: {
    head1,

    'to-do-list':todolist,
  },
};
</script>
 

 <style scoped>
* {
  background: #22343c;
}
</style>
<template>
  <div class="row">
        <div class="col q-ml-md q-mt-sm q-gutter-xs" >
        <q-toolbar>
            <q-toolbar-title  >

                  <router-link to ="backtosubject">
                      <q-btn   flat color="white" icon="keyboard_arrow_left" label="Back" />
                  </router-link>
            </q-toolbar-title>
        <q-btn flat round dense text-color="white" icon="search" class="q-mr-xs" />
        </q-toolbar>
        <div class="row">
                      <div class="text-white text-bold" style="font-size:30px">
                        Subject
                      </div>
                </div>
        </div>
        
</div>
</template>

<script>

export default {
  data (){
    return {

    };
  },
  methods:{
    
  }
  
}
</script>

<style >
*{background: #22343C;}
</style>>



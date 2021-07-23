<template>
  <q-page class="readabook">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtohome">
          <q-btn flat color="" icon="keyboard_arrow_left" label="Back" style="font-size:16px ;color:#96A7AF" />
        </router-link>
      </q-toolbar-title>
        <q-btn flat round dense  icon="search" class="q-mr-xs" style="color:#96A7AF"/>
    </q-toolbar>

      <div class="row">
        <div class="col q-ml-md q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">Read a book</div>
        </div>
      </div>
 

  <div class="readprogress q-ml-lg q-mt-md" style="overflow: hidden">
   <div class="row q-mt-md q-px-md ">
        <div class="col">

        </div>

        <div class="col">
          <div class="row" >
             <div class="col q-ml q-mt-sm q-gutter-xs">
              <div class="text-white text-bold" style="font-size: 18px">Read progress</div>
            </div>
          </div>

          <div class="row">
              <div class="col-16 q-ml-xs  q-mt-xs">
                  <div class="welldonetier"></div>
              </div>
                <div class="col-16 q-ml-xs  q-gutter-xs">
                  <div class="texttier">welldone read</div>
                </div>
          </div>

          <div class="row">
              <div class="col-16 q-ml-xs  q-mt-xs">
                  <div class="goodtier"></div>
              </div>
              <div class="col-16 q-ml-xs  q-gutter-xs">
                  <div class="texttier"> good read </div>
              </div>
          </div>

          <div class="row">
              <div class="col-16 q-ml-xs  q-mt-xs">
                  <div class="badtier"></div>
              </div>
              <div class="col-16 q-ml-xs  q-gutter-xs">
                  <div class="texttier">not good</div>
              </div>
          </div>
        </div>

      </div>
    </div>


    <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
            <div class="statusred q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="south" class="q-mr-xs" style="color:white"/>
              </div>
            </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
                <div class="titlesubject">OOP 63</div>
             </div>
             <div class="col-3">
                <div class="percenred">15%</div>
            </div> 
          </div>

          <div class="row q-mt-lg">
             <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress1"
            color="red"
            class=""
            style="width: 90%"
          />
          </div>
        </div>
      </div>
    </div>

    <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
            <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="north" class="q-mr-xs" style="color:white"/>
              </div>
            </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
                <div class="titlesubject">Data Sci 63</div>
             </div>
             <div class="col-3">
                <div class="percenyellow">70%</div>
            </div> 
          </div>
         
          <div class="row q-mt-lg">
             <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress2"
            color="yellow"
            class=""
            style="width: 90%"
          />
          </div>
        </div>
      </div>
    </div>

    <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
            <div class="statusgreen q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="star" class="q-mr-xs" style="color:white"/>
              </div>
            </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
                <div class="titlesubject">UX/UI 63</div>
             </div>
             <div class="col-3">
                <div class="percengreen">98%</div>
            </div> 
          </div>
          
          <div class="row q-mt-lg">
             <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress3"
            color="green"
            class=""
            style="width: 90%"
          />
          </div>
        </div>
      </div>
    </div>
  <router-link to="gotospi">
    <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col ">
            <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="north" class="q-mr-xs" style="color:white"/>
              </div>
            </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
                <div class="titlesubject">SPI</div>
             </div>
             <div class="col-3">
                <div class="percenyellow">66%</div>
            </div> 
          </div>
           <div class="row q-mt-lg">
             <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress4"
            color="yellow"
            class=""
            style="width: 90%"
          />
          </div>
        </div>
      </div>
    </div>
  </router-link>

    <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
            <div class="statusred q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="south" class="q-mr-xs" style="color:white"/>
              </div>
            </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
                <div class="titlesubject">Software contructure</div>
             </div>
             <div class="col-3">
                <div class="percenred">15%</div>
            </div> 
          </div>
           <div class="row q-mt-lg">
             <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress1"
            color="red"
            class=""
            style="width: 90%"
          />
          </div>
        </div>
      </div>
    </div>
    
<div class="row q-mt-xl">
 <q-footer elevated >
      <q-toolbar
        class="shadow-2"
        style="
          background: #30444e;
          color: white;
          bottom: 0;
          position: absolute;
          width: 100%;
          border-radius: 15px 15px 0px 0px;
        "
      >
        <q-toolbar-title class="row justify-evenly">
          <q-btn flat name="calendar" icon="calendar_today" />
          <q-btn flat name="home" icon="home" />
          <q-btn flat name="book" icon="menu_book" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
</div>
    </q-page>
</template>

<script>
export default {
  data() {
    return {
      progress1: 0.15,
      progress2: 0.70,
      progress3: 0.98,
      progress4: 0.66,
    };
  },
};
</script>
<style scope>

.readabook{
  background: #22343c;
}
.welldonetier{
  width: 15px;
  height: 10px;
  background: #3DD598;
  border-radius:25px ;
}
.goodtier{
  width: 15px;
  height: 10px;
  background: #FFC542;
  border-radius:25px ;
}
.badtier{
  width: 15px;
  height: 10px;
  background: #FF575F;
  border-radius:25px ;
}
.readprogress{
  width: 90%;
  height: 157px;
  background: #30444E;
  border-radius:25px;
}
.texttier{
  font-size: 15px;
  color: #96A7AF;
  font-weight: bold;
}
.namebook{
  width: 90%;
  height: 99px;
  background: #30444E;
  border-radius:25px;
}
.titlesubject{
  font-size: 15px;
  color: white;
  font-weight: bold;
}
.statusred{
  width: 59px;
  height: 54px;
  background: #FF565E;
  border-radius:15px;
}
.statusyellow{
  width: 59px;
  height: 54px;
  background: #FFC542;
  border-radius:15px;
}
.statusgreen{
  width: 59px;
  height: 54px;
  background: #42FF4A;
  border-radius:15px;
}
.percenred{
  font-size: 15px;
  color: #FF575F;
  font-weight: bold;
}
.percenyellow{
  font-size: 15px;
  color: #FFC542;
  font-weight: bold;
}
.percengreen{
  font-size: 15px;
  color: #42FF4A;
  font-weight: bold;
}
</style>
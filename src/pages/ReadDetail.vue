<template>
  <q-page class="readabook">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtoreadabook">
          <q-btn flat icon="keyboard_arrow_left" label="Back" style="font-size:16px ;color:#96A7AF" />
        </router-link>
      </q-toolbar-title>
    </q-toolbar>

      <div class="row">
        <div class="col q-ml-md q-mt-xs q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">SPI</div>
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-md">
          <div class="text-bold" style="font-size: 22px ;color:#96A7AF">ดร.กุลศิริ</div>
        </div>
      </div>


      <div class="namebook q-ml-lg q-mt-lg" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
            <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
              <div class="row items-center justify-center q-mt-sm">
                <q-btn flat round dense  icon="star" class="q-mr-xs" style="color:white"/>
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
          <div class="row"></div>
        </div>
      </div>
    </div>

    <div class="row q-ml-xl q-mt-lg">
      <div class="q-ml-xs q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-ml-sm">
        <div class="termexam">Midterm exam</div>
      </div>
      <div class="col-4 q-ml-xs">
        <div class="dateexam">08 May 2020</div>
      </div>
      <div class="col">
        <div class="percenexam">30%</div>
      </div>
    </div>

    <div class="row q-ml-xl q-mt-sm">
      <div class="q-ml-xs q-mt-xs">
        <div class="redcircle"></div>
      </div>
      <div class="col-4 q-ml-sm">
        <div class="termexam">Final exam</div>
      </div>
      <div class="col-4 q-ml-xs">
        <div class="dateexam">18 May 2020</div>
      </div>
      <div class="col">
        <div class="percenexam">30%</div>
      </div>
    </div>

     <div class="row">
        <div class="col q-ml-md q-mt-xs q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">Chapter</div>
        </div>
        <div class="col-2 q-mt-md ">
           <q-btn icon="chrome_reader_mode" style="height:17px; max-width:22px ;color:#42FF4A" />
        </div>
      </div>
      
    
      <div class="row items-center q-mt-md">
        <div class="col ">
           <div class="bnumberchapter q-ml-md " style="overflow: hidden ;background:#FFC542">
              <div class="row text-center justify-center q-mt-sm">
                <div class="numberchapter ">1</div>
              </div>
          </div>
        </div>
        <div class="col-6 q-ml-md">
           <div class="titlechapter">Software Quality</div>
        </div>
        <div class="col"></div>
      </div>

      <div class="row items-center  q-mt-md">
        <div class="col ">
           <div class="bnumberchapter q-ml-md " style="overflow: hidden ;background:#3DD598">
              <div class="row text-center justify-center q-mt-sm">
                <div class="numberchapter ">2</div>
              </div>
          </div>
        </div>
        <div class="col-6 q-ml-md">
           <div class="titlechapter">Software Quality Factor</div>
        </div>
        <div class="col"></div>
      </div>
    
      <div class="row items-center  q-mt-md ">
        <div class="col ">
           <div class="bnumberchapter q-ml-md " style="overflow: hidden ;background:#FF565E">
              <div class="row text-center justify-center q-mt-sm">
                <div class="numberchapter ">3</div>
              </div>
          </div>
        </div>
        <div class="col-6 q-ml-md">
           <div class="titlechapter">Software Quality improvement</div>
        </div>
        <div class="col"></div>
      </div>
   
    </q-page>
</template>

<style scope>
.namebook{
  width: 317px;
  height: 99px;
  background: #30444E;
  border-radius:25px;
}
.termexam{
  font-size: 15px;
  color: #96A7AF;
  font-weight: bold;
}
.dateexam{
  font-size: 15px;
  color: #96A7AF;
  font-weight: bold;
}
.percenexam{
  font-size: 15px;
  color: #96A7AF;
  font-weight: bold;
}
.redcircle{
  width: 10px;
  height: 10px;
  background: #FF565E;
  border-radius: 100%;
}
.bnumberchapter{
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.numberchapter{
  font-size: 25px;
  color: white;
  font-weight: bold;
}
.titlechapter{
  font-size: 15px;
  color: white;
  font-weight: bold;
}

</style>
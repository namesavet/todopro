<template>
    <q-page class="addbackground">
        <div class="row">
            <div class="col">
                <div class="row q-pa-lg q-mt-xl">
                    <div class="text-center ">
                        <div class="borderdash row justify-center items-center">
                            <div class="profileImg ">
                                <q-img
                                    src="../image/profile.png"
                                    style="height: 100%; max-width: 100%; border-radius: 20%"
                                />
                             </div>
                        </div>
                    </div>
                </div>

                <div class="row q-pb-lg q-ml-lg">
                     <div class="text-white text-bold" style="font-size: 30px">Pongsavet</div>
                </div>

                <div class="row"  @click="$router.push({ name: 'profileDetail' })" push>
                    <div class="q-ml-md">
                        <q-avatar icon="perm_identity" style="color:#96A7AF"/>
                    </div>
                    <div class=" q-mt-md">
                        <div class="titlechoice">Profile</div>
                    </div>
                </div>


                <div class="row " @click="$router.push({ name: 'Welcome' })" push>
                    <div class="q-ml-md">
                        <q-avatar icon="logout" style="color:#96A7AF"/>
                    </div>
                    <div class="q-mt-md">
                        <div class="titlechoice">Log out</div>
                    </div>
                </div>
            </div>

            <div class="col">
                <q-img
                    src="../image/phonebackground.png"
                    style="height: 100%; max-width: 100%;"
                    @click="$router.push({ name: 'Index' })"
                    push
                />
            </div>
            
        </div>
    </q-page>
</template>

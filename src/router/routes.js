
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: ()  => import('pages/Index.vue') },
      {path: 'subject', component: ()  => import('pages/Subject.vue')},
      {path: 'addsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'course', component: ()  => import('pages/Course.vue')},
      {path: 'addsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'backtohome', component: () => import('pages/Index.vue')},
      {path: 'backtosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotoaddsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'Begin', component: () => import('pages/Begin.vue')},
      {path: 'Welcome', component: () => import('pages/Welcome.vue')},
      {path: 'Createaccount1', component: () => import('pages/Createaccount1.vue')},
      {path: 'Createaccount2', component: () => import('pages/Createaccount2.vue')},
      {path: 'Createaccount3', component: () => import('pages/Createaccount3.vue')},
      {path: 'gototestandscore', component: () => import('pages/Testandscore.vue')},
      
      
    
     ]
    
    },
  



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

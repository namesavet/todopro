
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {path: '', component: ()  => import('pages/Index.vue') },
      {path: 'gotoprofile', component: () => import('pages/Profile.vue')},
      {path: 'gotosemester', component: () => import('pages/semester.vue')},
      {path: 'subject', component: ()  => import('pages/Subject.vue')},
      {path: 'addsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'course', component: ()  => import('pages/Course.vue')},
      {path: 'backtohome', component: () => import('pages/Index.vue')},
      {path: 'backtosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotoaddsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'gotoreadabook', component: () => import('pages/Read abook.vue')},
      {path: 'backtoreadabook', component: () => import('pages/Read abook.vue')},
      {path: 'gotospi', component: () => import('pages/ReadDetail.vue')},
      {path: 'gototestandscore', component: () => import('pages/Testandscore.vue')},
      {path: 'gotosubjectscore', component: () => import('pages/subjectscore.vue')},
      {path: 'backtotestandscore', component: () => import('pages/Testandscore.vue')},
      {path: 'gotosettingscore', component: () => import('pages/settingscore.vue')},
      {path: 'backtosubjectscore', component: () => import('pages/subjectscore.vue')},
      {path: 'gotocalendar', component: () => import('pages/calendar.vue')},
      {path: 'backtocalendar', component: () => import('pages/calendar.vue')},
      {path: 'gotoaddcalendar', component: () => import('pages/addcalendar.vue')},


      { path: 'Begin', name: 'Begin', component: () => import('pages/Begin.vue') },
      { path: 'Welcome', name: 'Welcome', component: () => import('pages/Welcome.vue') },
      { path: 'Createaccount1', name: 'Createaccount1', component: () => import('pages/Createaccount1.vue') },
      { path: 'Createaccount2', name: 'Createaccount2', component: () => import('pages/Createaccount2.vue') },
      { path: 'Createaccount3', name: 'Createaccount3', component: () => import('pages/Createaccount3.vue') },
      { path: 'Createaccount4', name: 'Createaccount4', component: () => import('pages/Createaccount4.vue') },

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

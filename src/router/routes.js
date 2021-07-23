
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: ()  => import('pages/Index.vue') },
      {path: 'subject', component: ()  => import('pages/Subject.vue')},
      {path: 'addsubject', component: () => import('pages/Addsubject.vue')},
      {path: 'course', component: ()  => import('pages/Course.vue')},
      {path: 'backtohome', component: () => import('pages/Index.vue')},
      {path: 'backtosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotosubject', component: () => import('pages/Subject.vue')},
      {path: 'gotoaddsubject', component: () => import('pages/Addsubject.vue')},
       {path: 'gototestandscore', component: () => import('pages/Testandscore.vue')},
       {path: 'gotosubjectscore', component: () => import('pages/subjectscore.vue')},
       {path: 'backtotestandscore', component: () => import('pages/Testandscore.vue')},
       {path: 'gotosettingscore', component: () => import('pages/settingscore.vue')},
       {path: 'backtosubjectscore', component: () => import('pages/subjectscore.vue')},
       {path: 'gotocalendar', component: () => import('pages/calendar.vue')},
       {path: 'backtocalendar', component: () => import('pages/calendar.vue')},
       {path: 'gotoaddcalendar', component: () => import('pages/addcalendar.vue')},
       {path: 'gotosubjectchapter', component: () => import('pages/subjectchapter.vue')},
       {path: 'gotoevent', component: () => import('pages/event.vue')},
       {path: 'backtoevent', component: () => import('pages/event.vue')},
       {path: 'gotoeditevent', component: () => import('pages/editevent.vue')},
      
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

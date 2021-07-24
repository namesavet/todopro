
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {path: '', component: ()  => import('pages/Index.vue') },
      { path: 'Index', name: 'Index', component: () => import('pages/Index.vue') },
      { path: 'Begin', name: 'Begin', component: () => import('pages/Begin.vue') },
      { path: 'Welcome', name: 'Welcome', component: () => import('pages/Welcome.vue') },
      { path: 'Createaccount1', name: 'Createaccount1', component: () => import('pages/Createaccount1.vue') },
      { path: 'Createaccount2', name: 'Createaccount2', component: () => import('pages/Createaccount2.vue') },
      { path: 'Createaccount3', name: 'Createaccount3', component: () => import('pages/Createaccount3.vue') },
      { path: 'Createaccount4', name: 'Createaccount4', component: () => import('pages/Createaccount4.vue') }, 
      { path: 'profile', name: 'profile', component: () => import('pages/profile.vue') },
      { path: 'subject', name: 'subject', component: () => import('pages/subject.vue') },
      { path: 'addsubject', name: 'addsubject', component: () => import('pages/addsubject.vue') },
      { path: 'Read abook', name: 'Read abook', component: () => import('pages/Read abook.vue') },
      { path: 'ReadDetail', name: 'ReadDetail', component: () => import('pages/ReadDetail.vue') },
      { path: 'semester', name: 'semester', component: () => import('pages/semester.vue') },
      { path: 'settingsemester', name: 'settingsemester', component: () => import('pages/settingsemester.vue') },
      { path: 'testandscore', name: 'testandscore', component: () => import('pages/testandscore.vue') },
      { path: 'subjectscore', name: 'subjectscore', component: () => import('pages/subjectscore.vue') },
      { path: 'settingscore', name: 'settingscore', component: () => import('pages/settingscore.vue') },
      { path: 'calendar', name: 'calendar', component: () => import('pages/calendar.vue') },
      { path: 'addcalendar', name: 'addcalendar', component: () => import('pages/addcalendar.vue') },

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

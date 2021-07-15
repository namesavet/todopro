
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
      {path: 'gotoreadabook', component: () => import('pages/Read abook.vue')},
    
      
    
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

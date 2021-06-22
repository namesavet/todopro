
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
   HEAD
      { 
        path: '', component: ()  => import('pages/Index.vue') ,
        path: '/Subject', component: ()  => import('pages/Subject.vue') ,
        path: '/addsubject', component: () => import('pages/addsubject.vue')
    
    
    
    },
  

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

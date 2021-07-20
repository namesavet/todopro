
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: '', component: () => import('pages/Index.vue') },
      { path: 'subject', name: 'subject', component: () => import('pages/Subject.vue') },
      { path: 'addsubject', name: 'addsubject', component: () => import('pages/Addsubject.vue') },
      { path: 'backtohome', name: 'backtohome', component: () => import('pages/Index.vue') },
      { path: 'backtosubject', name: 'backtosubject', component: () => import('pages/Subject.vue') },
      { path: 'gotosubject', name: 'gotosubject', component: () => import('pages/Subject.vue') },
      { path: 'gotoaddsubject', name: 'gotoaddsubject', component: () => import('pages/Addsubject.vue') },
      { path: 'Begin', name: 'Begin', component: () => import('pages/Begin.vue') },
      { path: 'Welcome', name: 'Welcome', component: () => import('pages/Welcome.vue') },
      { path: 'Createaccount1', name: 'Createaccount1', component: () => import('pages/Createaccount1.vue') },
      { path: 'Createaccount2', name: 'Createaccount2', component: () => import('pages/Createaccount2.vue') },
      { path: 'Createaccount3', name: 'Createaccount3', component: () => import('pages/Createaccount3.vue') },
      { path: 'Createaccount4', name: 'Createaccount4', component: () => import('pages/Createaccount4.vue') },
      { path: 'gototestandscore', name: 'gototestandscore', component: () => import('pages/Testandscore.vue') },



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

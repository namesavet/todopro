
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: 'Index', name: 'Index', component: () => import('pages/Index.vue') },
      { path: '', name: 'Begin', component: () => import('pages/Begin.vue') },
      { path: 'Welcome', name: 'Welcome', component: () => import('pages/Welcome.vue') },
      { path: 'Createaccount1', name: 'Createaccount1', component: () => import('pages/Createaccount1.vue') },
      { path: 'Createaccount2', name: 'Createaccount2', component: () => import('pages/Createaccount2.vue') },
      { path: 'Createaccount3', name: 'Createaccount3', component: () => import('pages/Createaccount3.vue') },
      { path: 'Createaccount4', name: 'Createaccount4', component: () => import('pages/Createaccount4.vue') },
      { path: 'Forgotpassword', name: 'Forgotpassword', component: () => import('pages/ForgotPassword.vue') },
      { path: 'ResetPassword', name: 'Resetpassword', component: () => import('pages/ResetPassword.vue') },
      { path: 'NewPassword', name: 'Newpassword', component: () => import('pages/NewPassword.vue') },
      { path: 'Profile', name: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'ProfileDetail', name: 'profileDetail', component: () => import('pages/ProfileDetail.vue') },
      { path: 'GradeSummary', name: 'grade summary', component: () => import('src/pages/GradeSummary.vue') },
      { path: 'Subject', name: 'subject', component: () => import('pages/Subject.vue') },
      { path: 'AddSubject', name: 'addsubject', component: () => import('pages/AddSubject.vue') },
      { path: 'SelectAddSubject', name: 'selectaddsubject', component: () => import('pages/SelectAddSubject.vue') },
      { path: 'AddSubjectId', name: 'addsubjectid', component: () => import('pages/AddSubjectId.vue') },
      { path: 'ReadBook', name: 'Readbook', component: () => import('pages/ReadBook.vue') },
      { path: 'ReadDetail', name: 'ReadDetail', component: () => import('pages/ReadDetail.vue') },
      { path: 'Semester', name: 'semester', component: () => import('pages/Semester.vue') },
      { path: 'SettingSemester', name: 'settingsemester', component: () => import('pages/SettingSemester.vue') },
      { path: 'TestAndScore', name: 'testandscore', component: () => import('pages/TestAndScore.vue') },
      { path: 'SubjectChapter', name: 'subjectchapter', component: () => import('pages/SubjectChapter.vue') },
      { path: 'SubjectScore', name: 'subjectscore', component: () => import('pages/SubjectScore.vue') },
      { path: 'SettingScore', name: 'settingscore', component: () => import('pages/SettingScore.vue') },
      { path: 'Calendar', name: 'calendar', component: () => import('pages/Calendar.vue') },
      { path: 'AddCalendar', name: 'addcalendar', component: () => import('pages/AddCalendar.vue') },
      { path: 'Event', name: 'event', component: () => import('pages/Event.vue') },
      { path: 'EditEvent', name: 'editevent', component: () => import('pages/EditEvent.vue') },
      { path: 'EditSubjectChapter', name: 'editsubjectchapter', component: () => import('pages/EditSubjectChapter.vue') },
      


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

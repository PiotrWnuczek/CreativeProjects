import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyA9Vg1-0Mhba-ZBqA72xnHgeRqdu4_nZfE',
  authDomain: 'creativeprojects-app.firebaseapp.com',
  projectId: 'creativeprojects-app',
  storageBucket: 'creativeprojects-app.appspot.com',
  messagingSenderId: '889856686719',
  appId: '1:889856686719:web:74d1e7fd830ef6b1aa1d4a',
  measurementId: 'G-SJHREV6Z63',
});
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

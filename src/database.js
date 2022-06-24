import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyAqSX015CALe_Wi5r9Tj9RJSG1fkO_cRzE',
  authDomain: 'creativeprojects-db.firebaseapp.com',
  projectId: 'creativeprojects-db',
  storageBucket: 'creativeprojects-db.appspot.com',
  messagingSenderId: '1085559270275',
  appId: '1:1085559270275:web:b95dae1cf2df8d7777a4b6',
  measurementId: 'G-C37SVXB4H5',
});
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

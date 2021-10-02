import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from 'logic/authReducer';
import projectReducer from 'logic/projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  note: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

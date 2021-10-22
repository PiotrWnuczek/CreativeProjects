import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from 'logic/authReducer';
import projectReducer from 'logic/projectReducer';
import elementReducer from 'logic/elementReducer';
import skillReducer from 'logic/skillReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  element: elementReducer,
  skill: skillReducer,

  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

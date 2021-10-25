import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import profileReducer from 'logic/profileReducer';
import projectReducer from 'logic/projectReducer';
import elementReducer from 'logic/elementReducer';
import skillReducer from 'logic/skillReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  project: projectReducer,
  element: elementReducer,
  skill: skillReducer,

  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

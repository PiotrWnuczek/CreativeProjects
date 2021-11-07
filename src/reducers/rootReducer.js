import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import profileReducer from 'reducers/profileReducer';
import projectReducer from 'reducers/projectReducer';
import elementReducer from 'reducers/elementReducer';
import keywordReducer from 'reducers/keywordReducer';
import skillReducer from 'reducers/skillReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  project: projectReducer,
  element: elementReducer,
  keyword: keywordReducer,
  skill: skillReducer,

  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

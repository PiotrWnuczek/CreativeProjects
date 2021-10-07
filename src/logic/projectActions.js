export const createProject = (data) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects');
  const social = firestore.collection('projects');
  const ref = data.type === 'personal' ? personal : social;
  ref.add({
    ...data,
    authorid: authorid,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATEPROJECT_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATEPROJECT_ERROR', err });
  })
};

export const updateProject = (data, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects');
  const social = firestore.collection('projects');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'UPDATEPROJECT_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'UPDATEPROJECT_ERROR', err });
  })
};

export const removeProject = (data, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects');
  const social = firestore.collection('projects');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'REMOVEPROJECT_SUCCESS', id });
  }).catch((err) => {
    dispatch({ type: 'REMOVEPROJECT_SUCCESS', err });
  })
};

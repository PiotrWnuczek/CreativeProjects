export const createSkill = (data) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const ref = firestore.collection('users').doc(authorid).collection('skills');
  ref.add({
    ...data,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATESKILL_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATESKILL_ERROR', err });
  })
};

export const updateSkill = (data, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const ref = firestore.collection('users').doc(authorid).collection('skills');
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'UPDATESKILL_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'UPDATESKILL_ERROR', err });
  })
};

export const removeSkill = (id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const ref = firestore.collection('users').doc(authorid).collection('skills');
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'REMOVESKILL_SUCCESS', id });
  }).catch((err) => {
    dispatch({ type: 'REMOVESKILL_SUCCESS', err });
  })
};

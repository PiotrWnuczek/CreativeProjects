export const createElement = (data, file, projectid) => (
  dispatch, getState, { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects')
    .doc(projectid).collection('elements');
  const social = firestore.collection('projects').doc(projectid).collection('elements');
  const ref = data.type === 'personal' ? personal : social;
  const storageRef = firebase.storage().ref(projectid);
  const fileRef = file && storageRef.child(file.name);
  file && fileRef.put(file).then(() => (
    fileRef.getDownloadURL().then((url) => (
      ref.add({
        ...data,
        authorid: authorid,
        createdat: new Date(),
        filename: file.name,
        fileurl: url,
      })
    ))
  )).then(() => {
    dispatch({ type: 'CREATEELEMENT_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATEELEMENT_ERROR', err });
  })
  !file && ref.add({
    ...data,
    authorid: authorid,
    createdat: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATEELEMENT_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'CREATEELEMENT_ERROR', err });
  })
};

export const updateElement = (data, projectid, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects')
    .doc(projectid).collection('elements');
  const social = firestore.collection('projects').doc(projectid).collection('elements');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).update({
    ...data,
  }).then(() => {
    dispatch({ type: 'UPDATEELEMENT_SUCCESS', data });
  }).catch((err) => {
    dispatch({ type: 'UPDATEELEMENT_ERROR', err });
  })
};

export const removeElement = (data, projectid, id) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const authorid = getState().firebase.auth.uid;
  const personal = firestore.collection('users').doc(authorid).collection('projects')
    .doc(projectid).collection('elements');
  const social = firestore.collection('projects').doc(projectid).collection('elements');
  const ref = data.type === 'personal' ? personal : social;
  ref.doc(id).delete().then(() => {
    dispatch({ type: 'REMOVEELEMENT_SUCCESS', id });
  }).catch((err) => {
    dispatch({ type: 'REMOVEELEMENT_SUCCESS', err });
  })
};

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import SkillCreate from 'moleculs/SkillCreate';
import SkillsGrid from 'organisms/SkillsGrid';

const UserProfile = ({ skills }) => (
  <div>
    <SkillCreate />
    <SkillsGrid
      skills={skills}
    />
  </div>
);

const mapStateToProps = (state) => ({
  skills: state.firestore.ordered.skills,
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'users', doc: props.auth.uid,
      subcollections: [{ collection: 'skills' }],
      orderBy: ['createdat', 'desc'],
      storeAs: 'skills',
    },
  ]),
)(UserProfile);

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Grid } from '@mui/material';
import ProfileCard from 'moleculs/ProfileCard';
import SkillCreate from 'organisms/SkillCreate';
import SkillsGrid from 'organisms/SkillsGrid';

const UserProfile = ({ skills, profile }) => (
  <Grid container spacing={3}>
    <Grid item md={3}>
      <ProfileCard
        profile={profile}
      />
    </Grid>
    <Grid item md={9}>
      <SkillCreate />
      <SkillsGrid
        skills={skills}
      />
    </Grid>
  </Grid>
);

const mapStateToProps = (state) => ({
  skills: state.firestore.ordered.skills,
  profile: state.firebase.profile,
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

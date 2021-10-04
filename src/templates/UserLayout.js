import React from 'react';
import { styled } from '@mui/system';
import TopBar from 'organisms/TopBar';
import SideBar from 'organisms/SideBar';

const drawerWidth = 240;

const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
}));

const StyledWrapper = styled('div')({
  display: 'flex',
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const UserLayout = ({ children }) => (
  <StyledWrapper>
    <TopBar drawerWidth={drawerWidth} />
    <SideBar drawerWidth={drawerWidth} />
    <StyledContainer>
      <Offset /> {children}
    </StyledContainer>
  </StyledWrapper>
);

export default UserLayout;

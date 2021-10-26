import React from 'react';
import { styled } from '@mui/system';
import TopBar from 'templates/TopBar';
import SideBar from 'templates/SideBar';

const sideWidth = 250;

const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
}));

const StyledWrapper = styled('div')({
  display: 'flex',
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const MainLayout = ({ children }) => (
  <StyledWrapper>
    <TopBar sideWidth={sideWidth} />
    <SideBar sideWidth={sideWidth} />
    <StyledContainer>
      <Offset /> {children}
    </StyledContainer>
  </StyledWrapper>
);

export default MainLayout;

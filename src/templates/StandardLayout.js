import React from 'react';
import { styled } from '@mui/system';
import TopBar from 'organisms/TopBar';
import SideBar from 'organisms/SideBar';

const sideWidth = 250;

const StyledContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
}));

const StyledWrapper = styled('div')({
  display: 'flex',
});

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const StandardLayout = ({ children }) => (
  <StyledWrapper>
    <TopBar sideWidth={sideWidth} />
    <SideBar sideWidth={sideWidth} />
    <StyledContainer>
      <Offset /> {children}
    </StyledContainer>
  </StyledWrapper>
);

export default StandardLayout;

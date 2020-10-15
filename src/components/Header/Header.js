import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h1>Waitstaff Calculator</h1>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  nav {
    h1 {
      text-align: center;
    }
  }
`;

export default Header;

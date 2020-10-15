import React from 'react';
import styled from 'styled-components';

const EarningsInfo = ({ meals }) => {
  return (
    <StyledSection>
      <h2>Earnings Info: </h2>
      <p>Meal Count: {meals.length}</p>
      <p>
        Tip Total: $
        {meals.length ? meals.reduce((acc, curr) => (acc += curr.tip), 0) : 0}
      </p>
      <p>
        Average Tip: $
        {meals.length
          ? meals.reduce((acc, curr) => (acc += curr.tip), 0) / meals.length
          : 0}
      </p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  grid-area: earningsInfo;
`;

export default EarningsInfo;

import React from 'react';
import styled from 'styled-components';

const CustomerCharges = ({ baseMealPrice, tipPercentage }) => {
  return (
    <StyledSection>
      <h2>Customer: Charges</h2>
      <p>Subtotal: ${baseMealPrice}</p>
      <p>Tip: ${baseMealPrice * (tipPercentage / 100)}</p>
      <p>
        Total: $
        {parseFloat(baseMealPrice) +
          parseFloat(baseMealPrice) * (parseFloat(tipPercentage) / 100)}
      </p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  grid-area: customerCharges;
`;

export default CustomerCharges;

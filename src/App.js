import React, { useState } from 'react';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import CustomerCharges from './components/CustomerCharges/CustomerCharges';
import EarningsInfo from './components/EarningsInfo/EarningsInfo';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [baseMealPrice, setBaseMealPrice] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <StyledMain>
        <MealDetails
          baseMealPrice={baseMealPrice}
          taxRate={taxRate}
          tipPercentage={tipPercentage}
          setBaseMealPrice={setBaseMealPrice}
          setTaxRate={setTaxRate}
          setTipPercentage={setTipPercentage}
          setMeals={setMeals}
        ></MealDetails>
        <CustomerCharges
          baseMealPrice={baseMealPrice}
          tipPercentage={tipPercentage}
        ></CustomerCharges>
        <EarningsInfo meals={meals}></EarningsInfo>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  width: 92rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.6rem;
  grid-template-areas:
    'mealDetails customerCharges'
    'mealDetails earningsInfo';
`;

export default App;

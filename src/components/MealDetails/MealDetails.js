import React from 'react';
import styled from 'styled-components';

const MealDetails = ({
  baseMealPrice,
  taxRate,
  tipPercentage,
  setBaseMealPrice,
  setTaxRate,
  setTipPercentage,
  setMeals
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const taxTotal = parseFloat(baseMealPrice * (taxRate / 100));
    const tipTotal = parseFloat(baseMealPrice * (tipPercentage / 100));
    const mealTotal = parseFloat(baseMealPrice) + taxTotal + tipTotal;

    return setMeals((prevState) => [
      ...prevState,
      {
        baseMealPrice: parseFloat(baseMealPrice),
        tip: tipTotal,
        tax: taxTotal,
        total: mealTotal
      }
    ]);
  };

  const resetForm = () => {
    setBaseMealPrice(0);
    setTaxRate(0);
    setTipPercentage(0);
  };

  return (
    <StyledSection>
      <h2>Enter the Meal Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='meal-price'>Base Meal Price</label>
          <input
            type='number'
            id='meal-price'
            required
            value={baseMealPrice}
            onChange={(e) => setBaseMealPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='tax-rate'>Tax Rate</label>
          <input
            type='number'
            id='tax-rate'
            required
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='tip-amount'>Tip Percentage: %</label>
          <input
            type='number'
            id='tip-amount'
            required
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button type='button' onClick={resetForm}>
            Cancel
          </button>
        </div>
      </form>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  grid-area: mealDetails;
  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default MealDetails;

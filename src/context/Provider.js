// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({ redCar: false, blueCar: false, yellowCar: false })
  const moveCar = (car, side) => {
    const cars = {
      [car]: side,
    };
    setCars(cars);
  }

  const context = {
      cars,
      setCars,
      moveCar,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

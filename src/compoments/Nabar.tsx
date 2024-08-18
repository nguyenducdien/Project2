/** @format */

import React, { useState, useCallback, memo } from 'react';
import { TABS_NUMBER, TABS_NAME } from './../contan';
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [active, setActive] = useState(TABS_NUMBER.Product);

  const handleClick = useCallback((index: number) => {
    setActive(index);
   
  }, []);

  return (
    <div>
      {[TABS_NUMBER.Product, TABS_NUMBER.Categories, TABS_NUMBER.Color].map(
        (num) => (
          <Link
            key={num}
            to={`/${num === TABS_NUMBER.Product ? 'Product' : TABS_NAME[num]}`}
            style={{
              backgroundColor: active === num ? 'lightblue' : 'white',
              fontSize: '25px',
              border : '2px solid purple',
              borderRadius:'5px',
              margin: '5px',
              padding :'5px',
              textDecoration:'none'

            }}
            onClick={() => handleClick(num)}>
            {TABS_NAME[num]}
          </Link>
        )
      )}
    </div>
  );
};
export default Tabs;
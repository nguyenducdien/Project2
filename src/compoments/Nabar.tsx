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
        (num, index) => (
          <Link
            key={index}
            to={`/${num === TABS_NUMBER.Product ? '' : TABS_NAME[num]}`}
            style={{
              backgroundColor: active === index ? 'lightblue' : 'white',
              fontSize: '50px',
            }}
            onClick={() => handleClick(index)}>
            {TABS_NAME[num]}
          </Link>
        )
      )}
    </div>
  );
};
export default Tabs;
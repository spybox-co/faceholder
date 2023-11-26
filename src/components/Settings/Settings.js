import { useEffect, useState, useContext } from 'react';
import { store } from '../../store.js';

import styles from './Settings.module.scss';

export const Settings = () => {
  const { state, dispatch } = useContext(store);
  const { age, refresh } = state;

  const [range, setRange] = useState(age || { min: 0, max: 100 });

  // const range = age || { min: 0, max: 100 };

  changeMinRange = (event) => {
    const minRange = event.target.value;
    const maxRange = range.max;

    if (minRange < maxRange) {
      setRange({ ...range, min: minRange });
      dispatch({
        type: 'change age range',
        value: { ...range, min: minRange }
      });
    } else {
      setRange({ min: minRange, max: minRange });
      dispatch({
        type: 'change age range',
        value: { min: minRange, max: minRange }
      });
    }
  };

  changeMaxRange = (event) => {
    const minRange = range.min;
    const maxRange = event.target.value;

    if (maxRange > minRange) {
      setRange({ ...range, max: maxRange });
      dispatch({
        type: 'change age range',
        value: { ...range, max: maxRange }
      });
    } else {
      setRange({ min: maxRange, max: maxRange });
      dispatch({
        type: 'change age range',
        value: { min: maxRange, max: maxRange }
      });
    }
  };

  useEffect(() => {
    setRange(age);
    // TO-DO
    // console.log("settings", age);
  }, [age]);

  return (
    <div className={styles.root}>
      {range && (
        <form>
          <input type="number" value={range.min} readOnly />
          <div data-role="rangeslider">
            {/* <label for="range-1a">Rangeslider:</label> */}

            <input
              type="range"
              name="range-1a"
              id="range-1a"
              min="0"
              max="100"
              onChange={changeMinRange}
              value={range.min}
            />
            {/* <label for="range-1b">Rangeslider:</label> */}
            <input
              type="range"
              name="range-1b"
              id="range-1b"
              min="0"
              max="100"
              onChange={changeMaxRange}
              value={range.max}
            />
            {/* <span>{range.max}</span> */}
          </div>
          <input type="number" value={range.max} readOnly />
        </form>
      )}
    </div>
  );
};

import { createContext, useReducer } from 'react';

// import { initialFaceObject } from './utils/helpers';

// @See at Toptal
// https://www.toptal.com/react/react-context-api

const initialState = {
  age: { min: '0', max: '100' },
  refresh: true,
  assetsAmount: 480,
  assets: []
  // faces: {}
};

export const settings = {
  appName: 'Faceholder',
  slogan: 'this face is not real'
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // Samples
      case 'sample action #1':
        const newState = {
          ...state,
          viewport: { ...state, someParameter: action.value }
        }; // do something with the action
        return newState;

      case 'upload assets':
        return {
          ...state,
          assets: action.value
        };

      case 'change age range':
        return {
          ...state,
          age: action.value
        };

      case 'refresh':
        return {
          ...state,
          refresh: action.value
        };

      case 'set list of items':
        return {
          ...state,
          assets: action.value
        };

      case 'update item':
        const updateListItem = {
          ...state,
          assets: state.assets.splice(action.index, 1, action.value)
        };
        return updateListItem;

      case 'load more':
        const loadMoreItems = {
          ...state,
          assets: state.assets.splice(action.index, 1, action.value)
        };
        return loadMoreItems;

      // No action...
      default:
        console.warn('No dispatchEvent set!');
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

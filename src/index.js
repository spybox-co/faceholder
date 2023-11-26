import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { StateProvider } from './store.js';

import App from './App';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>
);

import React from 'react';
import { AppContext } from '../context/appContext';
import Recipes from './Recipes';

function App() {
  return (
    <AppContext>
      <Recipes />
    </AppContext>
  );
}

export default App;

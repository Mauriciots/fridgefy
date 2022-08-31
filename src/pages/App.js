import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from '../context/appContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import RecipesPage from './RecipesPage';
import ShoppingListPage from './ShoppingListPage';
import LandingPage from './LandingPage';
import ProtectedRoute from '../components/ProtectedRoute'

function App() {
  return (
    <div>
      <div>
        <AppContext>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={<LandingPage />}
              />
              <Route 
                path="/recipes" 
                element={
                  <ProtectedRoute>
                    <RecipesPage />
                  </ProtectedRoute>
                }
              />
              <Route 
                path="/shopping-list" 
                element={
                  <ProtectedRoute>
                    <ShoppingListPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
          {/* <Search />
          <Filter />  
          <Recipes />
          <MyRecipes />
          <MyFridge /> */}
        </AppContext>
      </div>
    </div>

  );
}

export default App;

import React from 'react';
import Header from './Components/header';
import InputField from './Components/inputfield';
import './App.css';

const App = () => {
  return (
      <div className="app-container">
          <Header />
          <InputField
              label="Keyword"
              type="text"
              placeholder="Enter a keyword"
          />
          <InputField
              label="Color"
              type="color"
          />
          <InputField
              label="Width (px)"
              type="number"
              placeholder="e.g., 1920"
          />
          <InputField
              label="Height (px)"
              type="number"
              placeholder="e.g., 1080"
          />
          <button className="search-button">Search Wallpapers</button>
      </div>
  );
};

export default App;
import React, { useState } from 'react';
import GlobalStyle from './style/global'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainContainer />
    </div>
  );
}

export default App;

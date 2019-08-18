import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './routers/Main';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route component={Main} path="/" exact={true}/>
    </BrowserRouter>
  );
}

export default App;

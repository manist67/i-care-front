import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';

import Navigation from './components/Navigation';
import Main from './routers/Main';
import Login from './routers/Login';
import Footer from './components/Footer';
import Signup from './routers/Signup';
import ActivityList from './routers/ActivityList';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
        <Route component={Main} path="/" exact={true}/>
        <Route component={Login} path="/signin" exact={true}/>
        <Route component={Signup} path="/signup" exact={true}/>
        <Route component={ActivityList} path="/list" exact={true}/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

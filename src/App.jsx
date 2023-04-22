import {BrowserRouter} from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import Account from './components/Account';



const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Account />
      <Footer />
    </>
  );
};

export default App;

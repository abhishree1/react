import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./components/Contacts";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contacts />
    </div>
  );
}

export default App;

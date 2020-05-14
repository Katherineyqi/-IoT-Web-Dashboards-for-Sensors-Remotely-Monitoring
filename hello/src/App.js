import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainView from './views/MainView'; 

class App extends React.Component{
  render (){
    return (
      <div className="App">
        <MainView katy="Coronavirus"/> 
       
      </div>
      
      
  )
  }
}

  
export default App;


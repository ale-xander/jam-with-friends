import React from 'react';
import UserContainer from "./Components/userContainer";
import InterestContainer from "./Components/interestContainer";
import './App.css';
import tempData from './Components/tempData'

const userData = tempData.users.users

function App() {
  return (
    <div className="App">
      <InterestContainer />
      some text be here. !!!
      <UserContainer userData={userData} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { connect } from 'react-redux';



function App() {
  return (
    <div className="App">
      
    </div>
  );
}


function mapStateToProps(state){
  console.log("MDTP state: ", state)
  return {}
}

export default connect(mapStateToProps, {})(App);

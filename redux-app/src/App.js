import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from './actions/actions';
import Header from './components/Header';
import Cards from './components/Cards';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f3eb;
`



function App(props) {
  useEffect(() => {
    props.fetchData()
  }, [])
  return (
    <AppContainer className="App">
      <Cards launches = {props.launches} />
    </AppContainer>
  );
}


function mapStateToProps(state){
  return {
    launches: state.launches
  }
}

export default connect(mapStateToProps, {fetchData})(App);

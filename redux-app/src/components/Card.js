import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    height: 5.3vw;
    width: 5.3vw;
    border: solid black 1px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5px;
    color: black;
    background-color: white;
    &:hover {
        background-color: #f5f3eb;
        color: white;
      }
`

const A = styled.a`
    text-decoration: none;
    color: black;
    font-size: 12px;
`

function Card(props){
    // console.log(props.launch.launch_failure_details)
    return(
        <CardContainer>
            <h1></h1>
            <A href = {props.launch.links.article_link}>{props.launch.flight_number}</A>
            {/* {props.launch.launch_failure_details.reason !== undefined ? <div>{props.launch.launch_failure_details.reason}</div> : <></>} */}
        </CardContainer>
    )
}

export default Card;
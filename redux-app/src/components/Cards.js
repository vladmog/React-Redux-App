import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
    width: 50vw;
    height: 50vw;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-content: flex-start;
`

function Cards(props){
    console.log("LAUNCHES: ", props)
    return(
        <CardsContainer>
            {props.launches.map(launch => {
                return (
                    <Card launch = {launch} />
                )
            })}
        </CardsContainer>
    )
}

export default Cards;
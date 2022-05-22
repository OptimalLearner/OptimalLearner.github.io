import React from 'react';
import { InfoContainer, Greetings, Name, Message, KnowMoreButton, Shape } from './Intro.elements';

const Intro = () => {
    return (
        <div>
            <InfoContainer>
                <Greetings> Hello, I'm </Greetings>
                <Name> KEVAL DHANANI </Name>
                <Message> Final Year Computer Engineering student learning to build full stack web3 applications using modern technologies. </Message>
                <KnowMoreButton> Know more about me </KnowMoreButton>
            </InfoContainer>
            <Shape></Shape>
        </div>
    )
}

export default Intro
import React from 'react';
import { InfoContainer, Greetings, Name, Message, KnowMoreButton, Shape } from './Intro.elements';

const Intro = () => {
    return (
        <div name='/'>
            <InfoContainer>
                <Greetings> Hello, I'm </Greetings>
                <Name> KEVAL DHANANI </Name>
                <Message> Final Year Computer Engineering student learning to build full stack web3 applications using modern technologies. </Message>
                <KnowMoreButton to='about' smooth={true} duration={500} offset={-150}> Know more about me </KnowMoreButton>
            </InfoContainer>
            <Shape></Shape>
        </div>
    )
}

export default Intro
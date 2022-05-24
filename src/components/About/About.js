import React from 'react';
import { AboutContainer, AboutVectorContainer, AboutVector, Heading, AboutInfo } from './About.elements';
import VectorImg from '../../images/AboutVectorImg.svg'; 

const About = () => {
    return (
        <div>
            <AboutContainer>
                <div style={{ position: 'relative' }}>
                    <Heading data-shadow='About Me'> About Me </Heading>
                    <AboutInfo> 
                        Hi, I'm Keval Dhanani currently in Final Year of Computer Engineering. I'm very passionate about Software Engineering and Blockchain Technology and like to build some creative stuff over the web.
                        <br /><br />
                        Being a hardworking and result-oriented individual, I can handle multiple projects at once and complete within the deadlines without affecting the integrity of my projects. I'm always looking for opportunities to learn and explore new things.    
                    </AboutInfo>
                </div>
                <AboutVectorContainer>
                    <AboutVector src={ VectorImg } alt='About Me Vector Illustration' />
                </AboutVectorContainer>
            </AboutContainer>
        </div>
    )
}

export default About
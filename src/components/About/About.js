import React from 'react';
import { AboutContainer, AboutVectorContainer, AboutVector, Heading, AboutInfo } from './About.elements';
import VectorImg from '../../images/AboutVectorImg.svg'; 

const About = () => {
    return (
        <div name='about'>
            <AboutContainer>
                <div style={{ position: 'relative' }}>
                    <Heading data-shadow='About Me'> About Me </Heading>
                    <AboutInfo> 
                        Hi, I'm Keval Dhanani currently in Final Year in Computer Engineering. I'm very passionate about Software Engineering and Blockchain Technology and like to build some creative stuff over the web. I love learning better ways to create seamless user experiences with efficient and scalable code.
                        <br /><br />
                        Being a hardworking and result-oriented individual, I can handle multiple projects at once and complete within the deadlines without affecting the integrity of my projects. I'm always looking for opportunities to work with those who are willing to share their knowledge.  
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
import React from 'react';
import { FooterContainer, FooterMessage, Heart, Bio } from './Footer.elements';

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterMessage> Designed and Built by <Bio href=''> Keval Dhanani. </Bio> </FooterMessage>
            </FooterContainer>
        </div>
    )
}

export default Footer;
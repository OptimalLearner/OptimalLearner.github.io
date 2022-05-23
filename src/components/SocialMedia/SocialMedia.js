import React from 'react';
import { SocialMediaList, SocialMediaIcon } from './SocialMedia.elements';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import { SiHackernoon } from 'react-icons/si';

const SocialMedia = () => {
    return (
        <div>
            <SocialMediaList>
                <a href='https://www.linkedin.com/in/keval-dhanani-01/' target='_blank'> <SocialMediaIcon> <FaLinkedinIn /> </SocialMediaIcon> </a>
                <a href='https://github.com/OptimalLearner' target='_blank'> <SocialMediaIcon> <FaGithub /> </SocialMediaIcon> </a>
                <a href='https://codepen.io/OptimalLearner' target='_blank'> <SocialMediaIcon> <FaCodepen /> </SocialMediaIcon> </a>
                <a href='' target='_blank'> <SocialMediaIcon> <SiHackernoon /> </SocialMediaIcon> </a>
            </SocialMediaList>
        </div>
    )
}

export default SocialMedia
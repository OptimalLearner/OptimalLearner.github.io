import React from 'react';
import { ContactContainer, Heading, ContactPartition, ContactPartitionLeft, Text1, EmailButton, HR, ContactPartitionRight, Text2, ConnectButton, OR } from './Contact.elements';

const Contact = () => {
    return (
        <div name='contact'>
            <ContactContainer>
                <Heading data-shadow='Contact Me'> Contact Me </Heading>
                <ContactPartition>
                    <ContactPartitionLeft>
                        <Text1> Forms are old school. In case you have any queries or have any opportunities, my inbox is always open. I’ll try my best to get back to you! </Text1>
                        <EmailButton href='mailto:k.dhanani48@gmail.com' target='_blank' rel='noopener noreferrer'> Get in touch </EmailButton>
                    </ContactPartitionLeft>
                    <HR />
                    <ContactPartitionRight>
                        <Text2> Let's connect through <strong>Linkedin</strong> </Text2>
                        <ConnectButton href='https://www.linkedin.com/in/keval-dhanani-01' target='_blank' rel='noopener noreferrer'> Connect </ConnectButton>
                        <OR> OR </OR>
                        <Text2> Follow me on <strong>GitHub</strong> </Text2>
                        <ConnectButton href='https://github.com/OptimalLearner' target='_blank' rel='noopener noreferrer'> Follow </ConnectButton>
                    </ContactPartitionRight>
                </ContactPartition>
            </ContactContainer>
        </div>
    )
}

export default Contact
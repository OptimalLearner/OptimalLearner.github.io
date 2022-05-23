import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
            <Intro />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Home;
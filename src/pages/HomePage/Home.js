import React, { useState } from 'react';
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import Navbar from '../../components/Navbar/Navbar';
import ProjectList from '../../components/ProjectList/ProjectList';
import Sidebar from '../../components/Sidebar/Sidebar';
import Skills from '../../components/Skills/Skills';
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
            <About />
            <Education />
            <Skills />
            <ProjectList />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default Home;
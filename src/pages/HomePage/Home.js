import React, { useState } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Education from '../../components/Education/Education';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';
import ProjectList from '../../components/ProjectList/ProjectList';
import Sidebar from '../../components/Sidebar/Sidebar';
import Skills from '../../components/Skills/Skills';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    setTimeout(() => {
        setIsLoading(false);
    }, 6000);

    return (
        <div>
            {isLoading ?
                <Loader />
            :
                <div>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
			        <Navbar toggle={toggle} />
                    <Intro />
                    <About />
                    <Education />
                    <Skills />
                    <ProjectList />
                    <Contact />
                    <SocialMedia />
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Home;
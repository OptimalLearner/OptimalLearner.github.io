import React from 'react';
import { SkillsContainer, Heading, SkillsType, SkillsList, SkillsBox, SkillsLogo, SkillsName } from './Skills.elements';
import { FaHtml5, FaBootstrap, FaReact, FaNodeJs, FaPython, FaJava, FaFigma, FaGitSquare, FaGithub, FaNpm } from 'react-icons/fa';
import { DiCss3, DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { SiJquery, SiFlask, SiExpress, SiMongodb, SiCplusplus, SiInkscape, SiSublimetext, SiVisualstudiocode } from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';

const Skills = () => {
    return (
        <div>
            <SkillsContainer>
                <Heading data-shadow='Skills'> Skills </Heading>
                <SkillsType>
                    <SkillsList>
                        <SkillsBox>
                            <SkillsLogo> <FaPython /> </SkillsLogo>
                            <SkillsName> Python </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiCplusplus /> </SkillsLogo>
                            <SkillsName> C++ </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaJava /> </SkillsLogo>
                            <SkillsName> Java </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaHtml5 /> </SkillsLogo>
                            <SkillsName> HTML </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <DiCss3 /> </SkillsLogo>
                            <SkillsName> CSS </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <IoLogoJavascript /> </SkillsLogo>
                            <SkillsName> JavaScript </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaBootstrap /> </SkillsLogo>
                            <SkillsName> Bootstrap </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiJquery /> </SkillsLogo>
                            <SkillsName> jQuery </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaReact /> </SkillsLogo>
                            <SkillsName> ReactJS </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <BiDevices /> </SkillsLogo>
                            <SkillsName> Responsive Design </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiFlask /> </SkillsLogo>
                            <SkillsName> Flask </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaNodeJs /> </SkillsLogo>
                            <SkillsName> NodeJS </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiExpress /> </SkillsLogo>
                            <SkillsName> ExpressJS </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiMongodb /> </SkillsLogo>
                            <SkillsName> MongoDB </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <DiMysql /> </SkillsLogo>
                            <SkillsName> MySQL </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaGitSquare /> </SkillsLogo>
                            <SkillsName> Git </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaGithub /> </SkillsLogo>
                            <SkillsName> GitHub </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaNpm /> </SkillsLogo>
                            <SkillsName> NPM </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiVisualstudiocode /> </SkillsLogo>
                            <SkillsName> VSCode </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiSublimetext /> </SkillsLogo>
                            <SkillsName> Sublime Text </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <FaFigma /> </SkillsLogo>
                            <SkillsName> Figma </SkillsName>
                        </SkillsBox>
                        <SkillsBox>
                            <SkillsLogo> <SiInkscape /> </SkillsLogo>
                            <SkillsName> InkScape </SkillsName>
                        </SkillsBox>
                    </SkillsList>
                </SkillsType>
            </SkillsContainer>
        </div>
    )
}

export default Skills
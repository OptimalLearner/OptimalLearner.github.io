import React from 'react';
import ReactTooltip from "react-tooltip";
import { ProjectListContainer, Heading, ProjectCard, ProjectBanner, ProjectBannerOverlay, ProjectLinks, ProjectLinkGitHub, ProjectLinkLive, ProjectInfo, ProjectTitle, ProjectDetails, ProjectTech, ProjectTechTag } from './ProjectList.elements';
import { projectInfo } from './Data';
import { FaGithub } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';

const ProjectList = () => {
    return (
        <div>
            <ProjectListContainer>
                <Heading data-shadow='Projects'> Projects </Heading>
                { projectInfo.map((p) => (
                    <ProjectCard key={ p.name } imgStart={ p.img_start }>
                        <ProjectBanner imgUrl={ p.banner_img }>
                            <ProjectBannerOverlay />
                            <ProjectLinks>
                                { p.github ?
                                    <div>
                                        <a href={ p.github } target='_blank' data-tip data-for="github-tip">
                                            <ProjectLinkGitHub githubLink={ p.github }>
                                                <FaGithub />
                                            </ProjectLinkGitHub>
                                        </a>
                                        <ReactTooltip id="github-tip" place="left" effect="float" type="light">
                                            View the source code on GitHub
                                        </ReactTooltip>
                                    </div>
                                    : <></>
                                }
                                { p.live ?
                                    <div>
                                        <a href={ p.live } target='_blank' data-tip data-for="live-tip">
                                            <ProjectLinkLive githubLink={ p.live }>
                                                <BsGlobe2 />
                                            </ProjectLinkLive>
                                        </a>
                                        <ReactTooltip id="live-tip" place="right" effect="float" type="light" style={{position: 'absolute', top: '50%' }}>
                                            View live project
                                        </ReactTooltip>
                                    </div>
                                    : <></>
                                }
                            </ProjectLinks>
                        </ProjectBanner>
                        <ProjectInfo>
                            <ProjectTitle imgStart={ p.img_start }> { p.name } </ProjectTitle>
                            <ProjectDetails imgStart={ p.img_start }> { p.description }  </ProjectDetails>
                            <ProjectTech imgStart={ p.img_start }>
                            {
                                p.tech_stack.map((elem) => (
                                    <ProjectTechTag> { elem.name } </ProjectTechTag>
                                ))
                            }
                            </ProjectTech>
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </ProjectListContainer>
        </div>
    )
}

export default ProjectList;
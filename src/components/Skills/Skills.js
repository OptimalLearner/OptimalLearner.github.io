import React from 'react';
import { SkillsContainer, Heading, SkillsType, SkillsList, SkillsBox, SkillsLogo, SkillsName } from './Skills.elements';
import { skills } from './Data';

const Skills = () => {
    return (
        <div>
            <SkillsContainer>
                <Heading data-shadow='Skills'> Skills </Heading>
                <SkillsType>
                    <SkillsList>
                        { skills.map((e) => (
                            <SkillsBox>
                                <SkillsLogo> {e.skills_logo} </SkillsLogo>
                                <SkillsName> {e.skills_name} </SkillsName>
                            </SkillsBox>
                        )) }
                    </SkillsList>
                </SkillsType>
            </SkillsContainer>
        </div>
    )
}

export default Skills
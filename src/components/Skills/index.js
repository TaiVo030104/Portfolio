import React from 'react';
import styled from "styled-components";
import {skills} from "../../data/constants"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-item: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 margin-top: 30px;
 justify-content: center;
 gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid #5CA8FF;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme}) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary+80};
  border: 1px solid ${({theme})=>theme.text_primary+80};
  padding: 12px 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;
const SkillImage = styled.img`
  width: 30px;
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been studying at university</Desc>
      <SkillsContainer>
        {skills.map((skill) => {
          return (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {
                  skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      <SkillImage src={item.image}/>
                      {item.name}
                    </SkillItem>
                  ))
                }
              </SkillList>
            </Skill>
          );
        })}
      </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
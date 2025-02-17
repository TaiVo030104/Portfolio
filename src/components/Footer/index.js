import styled from 'styled-components';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;


const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Vo Tuan Tai</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FaFacebook /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.github} target="display"><FaGithub /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
          <SocialMediaIcon href={`mailto:${Bio.email}`} target="display"><FaEnvelope /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2025 Vo Tuan Tai. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
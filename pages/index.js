import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/path-to-your-parallax-image.jpg');
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  font-family: 'IranYekan', sans-serif;
`;

const IntroText = styled.p`
  color: white;
  font-size: 24px;
  margin: 20px 0;
`;

const SeasonsScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
`;

const Season = styled.div`
  margin: 0 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
`;

const DiscoverButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <IntroText>{t('introText')}</IntroText>
      <SeasonsScroll>
        <Season>{t('season1')}</Season>
        <Season>{t('season2')}</Season>
        <Season>{t('season3')}</Season>
        {/* Add more seasons as needed */}
      </SeasonsScroll>
      <DiscoverButton>{t('discover')}</DiscoverButton>
    </HeroSection>
  );
};

export default HomePage;
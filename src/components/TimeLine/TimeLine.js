import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Hello, my name is shavkat shavkiev and I am a full-stack software engineer. I have experience working in all areas of the stack from the Front-End to the Back-End and Databases. I am passionate about programming and I strive to learn something new every day.
      </SectionText>
    </Section>
  );
};

export default Timeline;

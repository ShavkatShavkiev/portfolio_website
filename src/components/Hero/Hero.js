import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
            Welcome To <br />
            Shavkats Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this website is to showcase my projects and skills
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/shavkat-shavkiev/'}>More About Me</Button>
      </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
            Welcome To <br />
            My personal Portfolio
        </SectionTitle>
        <SectionText>
          Place Holder
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>More About Me</Button>
      </LeftSection>
  </Section>
);

export default Hero;
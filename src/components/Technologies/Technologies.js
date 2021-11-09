import React from 'react';
import { DiFirebase, DiReact, DiZend, AiOutlineCloudServer } from 'react-icons/di';
import { AiOutlineCloudSync } from "react-icons/ai";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience from the Front-End to the Back-End and everything in between. My favorite tools to use are React, Express, and MySQL
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experience With <br />
          React <br />
          React-Native <br />
          JavaScript <br />
          HTML <br />
          CSS <br />
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience With <br />
          Node <br />
          Express <br />
          MySQL <br />
          MongoDB <br />
        </ListParagraph>
      </ListItem>
      <ListItem>
        <AiOutlineCloudSync size='3rem' />
        <ListTitle>Development Tools & Testing</ListTitle>
        <ListParagraph>
          Experience With <br />
          AWS <br />
          Nginx <br />
          Jest <br />
          Chai <br />
          Mocha <br />
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

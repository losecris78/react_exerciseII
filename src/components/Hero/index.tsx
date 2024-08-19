import React from 'react';
import { Title,Container, HeroImg } from "./styles"

const Hero = () => (
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
  <HeroImg>
    <Container>
      <Title>
        As melhores vagas para tecnologia, design e artes visuais.
      </Title>
    </Container>
  </HeroImg>
)

export default Hero

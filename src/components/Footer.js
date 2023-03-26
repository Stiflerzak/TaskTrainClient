import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00003B;
  height: 80px;
`;

const Text = styled.p`
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Text>This is the footer</Text>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import color from '../styles/color';

const { light_primary } = color;

const StyledFooter = styled.footer`
  height: 100px;
  background: ${light_primary};
`;

const Footer = () => {
  return <StyledFooter className="layout-width"></StyledFooter>;
};

export default React.memo(Footer);

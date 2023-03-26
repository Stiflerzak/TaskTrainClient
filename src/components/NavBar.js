import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00003B;
  height: 80px;
  padding: 0 20px;
`;

const Logo = styled.h1`
  color: #fff;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Navbar = ({ user }) => {
  const renderAvatar = () => {
    if (user && user.avatar) {
      return <Avatar src={user.avatar} alt={`${user.name}'s avatar`} />;
    }
    return null;
  };

  return (
    <Nav>
      <Logo>TaskTrain</Logo>
      {renderAvatar()}
    </Nav>
  );
};

export default Navbar;

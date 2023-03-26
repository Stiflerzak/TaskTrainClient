import React from 'react';
import styled from 'styled-components';
import Avatar from '../assets/Avatar.svg'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Name = styled.h2`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

const Label = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Profile = ({ name, label }) => {
  return (
    <Card>
      <AvatarImg src={Avatar} alt="Avatar" />
      <Name>{name}</Name>
      <Label>{label}</Label>
    </Card>
  );
};

export default Profile;

import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F2EAF2;
`;

const UpperSection = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;



const Dashboard = ({ user }) => {
  return (
    <DashboardContainer>
      <UpperSection>
        <Navbar user={user} />
      </UpperSection>
      <CardsContainer>
        <div>
          <h2>Profile</h2>
        </div>
        <div>
          <h2>New Task</h2>
        </div>
        <div>
          <h2>Projects</h2>
        </div>
      </CardsContainer>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;

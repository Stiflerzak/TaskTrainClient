import styled from 'styled-components';
import Navbar from '../components/NavBar';
// import ProfileCard from './ProfileCard';
// import NewTask from './NewTask';
// import ProjectsCard from './ProjectsCard';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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



const Dashboard = () => {
  return (
    <DashboardContainer>
      <UpperSection>
        <Navbar />
      </UpperSection>
     
       
    </DashboardContainer>
  );
};

export default Dashboard;

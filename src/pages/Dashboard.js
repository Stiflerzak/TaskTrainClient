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
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

const ProfileCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const NewTaskCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const NewTaskForm = () => {
  return (
    <form>
      <Label htmlFor="title">Title:</Label>
      <Input type="text" id="title" name="title" required />

      <Label htmlFor="description">Description:</Label>
      <Textarea id="description" name="description" required></Textarea>

      <Label htmlFor="deadline">Deadline:</Label>
      <Input type="date" id="deadline" name="deadline" required />

      <Label htmlFor="status">Status:</Label>
      <Input type="text" id="status" name="status" required />

      <Label htmlFor="priority">Priority:</Label>
      <Input type="number" id="priority" name="priority" min="1" max="10" required />

      <Button type="submit">Add Task</Button>
    </form>
  );
};

const Dashboard = ({ user }) => {
  return (
    <DashboardContainer>
      <UpperSection>
        <Navbar user={user} />
      </UpperSection>
      <CardsContainer>
        <ProfileCard>
          <h2>Profile</h2>
        </ProfileCard>
        <NewTaskCard>
          <h2>Add New Task</h2>
          <NewTaskForm />
        </NewTaskCard>
        <ProjectCard>
          <h2>Projects</h2>
        </ProjectCard>
      </CardsContainer>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;

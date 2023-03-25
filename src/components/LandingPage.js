import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffccd5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 50px;
`;

const Button = styled.button`
  border: none;
  background-color: #0077b6;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #023e8a;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin-right: 2rem;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormButton = styled(Button)`
  width: 100%;
`;

const ScreenshotCard = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 400px;
  border-radius: 4px;
`;

const LandingPage = () => {
  return (
    <div>
      <Navbar>
        <Logo src="tasktrain-logo.png" alt="TaskTrain logo" />
        <div>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </Navbar>
      <MainContainer>
        <LoginCard>
          <CardTitle>Log In</CardTitle>
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Password" />
          <FormButton>Log In</FormButton>
        </LoginCard>
        <ScreenshotCard>
        Visual Representation of this app
        </ScreenshotCard>
      </MainContainer>
    </div>
  );
};

export default LandingPage;

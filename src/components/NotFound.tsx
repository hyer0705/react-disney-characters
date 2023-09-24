import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 480px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;
const Emoji = styled.span`
  font-size: 100px;
`;
const Title = styled.h1`
  font-size: 100px;
`;
const SubTitle = styled.h2`
  font-size: 56px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

function NotFound() {
  return (
    <Container>
      <Header>
        <Emoji>☹️</Emoji>
        <Title>404</Title>
        <SubTitle>Page not found</SubTitle>
      </Header>
      <Description>
        The Page you are looking for doesn't exist or an other error occurred.
      </Description>
      <Description>
        <Link to="/">Go back</Link>
      </Description>
    </Container>
  );
}

export default NotFound;

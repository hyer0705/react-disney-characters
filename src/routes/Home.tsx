import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchAllCharacters } from "../api";
import { Link, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const Header = styled.header`
  margin: 20px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CharacterItem = styled.div`
  border-radius: 15px;
  font-weight: 700;
  transition: background-color 0.3s ease-in;

  a {
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    transition: color 0.3s ease-in;
  }
  &:hover {
    background-color: ${(props) => props.theme.textColor};
    a {
      color: ${(props) => props.theme.bgColor};
    }
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 10px;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data: characters } = useQuery<ICharacter[]>({
    queryKey: ["allCharacters"],
    queryFn: fetchAllCharacters,
  });

  return (
    <>
      <Container>
        <Header>
          <Title>Disney Characters</Title>
        </Header>
        {isLoading ? (
          <Loader />
        ) : (
          <CharacterList>
            {characters?.map((character) => (
              <CharacterItem key={character.id}>
                <Link to={`character/${character.id}`}>
                  <Img src={character.imageUrl} alt={character.name} />
                  <span>{character.name}</span>
                </Link>
              </CharacterItem>
            ))}
          </CharacterList>
        )}
      </Container>
      <Outlet />
    </>
  );
}

export default Home;

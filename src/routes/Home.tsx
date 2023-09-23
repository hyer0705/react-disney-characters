import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchAllCharacters } from "../api";

const Container = styled.div``;

const Header = styled.header``;

const Title = styled.h1``;

const CharacterList = styled.ul``;

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
    <Container>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CharacterList>
          {characters?.map((character) => (
            <li key={character.id}>
              <img src={character.imageUrl} alt={character.name} />
              <span>{character.name}</span>
            </li>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}

export default Home;

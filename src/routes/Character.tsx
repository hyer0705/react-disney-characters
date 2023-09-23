import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchCharacterById } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Header = styled.div``;

const Title = styled.h1``;

const Films = styled.ul``;

interface ICharacterDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

function Character() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data: character } = useQuery<ICharacterDetail>({
    queryKey: [id, "characterDetail"],
    queryFn: () => fetchCharacterById(Number(id)),
  });

  return (
    <Container>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header>
            <Link to="/">
              <span>&larr;</span>
            </Link>
            <img alt={character?.name} src={character?.imageUrl} />
            <Title>{`${character?.name}'s Films'`}</Title>
          </Header>
          <Films>
            {character?.films.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </Films>
        </>
      )}
    </Container>
  );
}

export default Character;

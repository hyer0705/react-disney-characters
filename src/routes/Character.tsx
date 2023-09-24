import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchCharacterById } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 360px;
  margin: 30px auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const GoHome = styled.div`
  width: 100%;
  text-align: center;
  a {
    color: ${(props) => props.theme.textColor};
    padding: 5px 30px;
    border-radius: 7px;
    transition: background-color 0.3s ease-in;
    &:hover {
      background-color: #d2dae2;
      color: #3c40c6;
    }
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Films = styled.ul`
  text-align: center;
  li {
    background-color: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.bgColor};
    display: inline-block;
    padding: 7px;
    border-radius: 5px;
    margin: 5px;
  }
`;

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
            <GoHome>
              <Link to="/">&larr;</Link>
            </GoHome>
            <Img alt={character?.name} src={character?.imageUrl} />
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

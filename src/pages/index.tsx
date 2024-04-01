import React from "react";
import { Container, Title } from "./styles";
import BgTest from "../assets/images/pokemon-hero.jpg";

export default function Home() {
  return (
    <Container image={BgTest}>
      <Title>Cuidamos bem do seu pokémon, para ele cuidar bem de você</Title>
    </Container>
  );
}

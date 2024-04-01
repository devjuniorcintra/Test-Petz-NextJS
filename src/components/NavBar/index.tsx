import React from "react";

import { BreadCrumb, Container, Description, Item, TitlePage } from "./styles";
import Link from "next/link";

type Props = {
  display: boolean;
  text: string;
};

export default function Navbar({ display, text }: Props) {
  const handleTitlePage = () => {
    switch (text) {
      case "/quemSomos":
        return {
          title: "Quem Somos",
          description: "A maior rede de tratamento pokémon.",
        };
        break;
      case "/agendarConsulta":
        return {
          title: "Agendar Consulta",
          description: "Recupere seus pokémons em 5 segundos",
        };
        break;
      default:
        return {
          title: "",
          description: "",
        };
        break;
    }
  };

  return (
    <Container display={display}>
      <BreadCrumb>
        <Link href="/">
          <Item>Home</Item>
        </Link>
        <Item>{">"}</Item>
        <Link href={text}>
          <Item display={display}>{handleTitlePage().title}</Item>
        </Link>
      </BreadCrumb>
      <TitlePage>{handleTitlePage().title}</TitlePage>
      <Description>{handleTitlePage().description}</Description>
    </Container>
  );
}

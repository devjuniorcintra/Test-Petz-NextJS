import React, { useEffect, useState } from "react";

import { Container, Title } from "./styles";

import LogoSVG from "../../assets/images/white-pokeball.svg";
import Image from "next/image";

const LogoButton: React.FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, [open]);

  return (
    <Container open={open}>
      <Image priority src={LogoSVG} alt="Logo Pokémon" />
      <Title open={open}>Centro Pokémon</Title>
    </Container>
  );
};

export default LogoButton;

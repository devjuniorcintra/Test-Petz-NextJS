import React, { useEffect, useState } from "react";

import {
  ButtonModal,
  ButtonSchedule,
  Column,
  Container,
  Description,
  Divider,
  Form,
  Input,
  Label,
  LabelInfo,
  Line,
  LineInfo,
  MessageModal,
  NewPokemonButton,
  PokemonLine,
  Title,
  TitleForm,
  TitleLine,
  TitleModal,
  Total,
} from "./styles";
import CustomSelect from "../../components/CustomSelect";
import api from "../../services";

import Modal from "react-modal";
import { inter } from "../../styles/fonts";
import Image from "next/image";

import WarningSVG from "../../assets/images/warning.svg";
import CheckSVG from "../../assets/images/check.svg";

export default function AgendarConsulta() {
  const [dataOptions, setDataOptions] = useState([]);
  const [hourOptions, setHourOptions] = useState([]);
  const [dateSelected, setDateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [regionSelected, setRegionSelected] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonOptions, setPokemonOptions] = useState([]);
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [formVerification, setFormVerification] = useState({
    open: false,
    title: "",
    type: "",
    message: "",
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderColor: "red",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
      borderRadius: "8px",
    },
  };

  const optionsRegion = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const optionsCity = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleLoadDates = async () => {
    fetch("http://localhost:3000/api/scheduling/date", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao recuperar as datas");
        }
        return response.json();
      })
      .then((data) => {
        setDataOptions(
          data.map((date: string) => {
            return { value: date, label: date };
          })
        );
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const handleLoadHours = async () => {
    if (!dateSelected) return;

    fetch("http://localhost:3000/api/scheduling/time", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: dateSelected }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao recuperar as datas");
        }
        return response.json();
      })
      .then((data) => {
        setHourOptions(
          data.map((hour: string) => {
            return { value: hour, label: hour };
          })
        );
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const handleLoadPokemons = async () => {
    api
      .get("/pokemon/?limit=20")
      .then((response) => {
        return response.data.results;
      })
      .then((data) => {
        setPokemonOptions(
          data.map((podemon) => {
            return { value: podemon.name, label: podemon.name };
          })
        );
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  const handleSubmit = () => {
    if (name === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Preencha o nome",
      });
      return;
    }
    if (middleName === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Preencha o sobrenome",
      });
      return;
    }
    if (regionSelected === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Selecione a região",
      });
      return;
    }
    if (citySelected === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Selecione a cidade",
      });
      return;
    }
    if (selectedPokemons.length < 1) {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Selecione ao menos 1 pokémon",
      });
      return;
    }
    if (dateSelected === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Selecione a data",
      });
      return;
    }
    if (selectedHour === "") {
      setFormVerification({
        open: true,
        title: "Houve um Problema no Agendamento",
        type: "Error",
        message: "Selecione o horário",
      });
      return;
    }
    setFormVerification({
      open: true,
      title: "Consulta Agendada",
      type: "Success",
      message: `Seu agendamento para o dia ${dateSelected.value}, às ${selectedHour.value} para ${selectedPokemons.length} pokémons foi realizado com sucesso!`,
    });
  };

  const handleCloseModal = () => {
    setFormVerification({
      open: false,
    });

    if (formVerification.type !== "Error") {
      window.location.reload();
    }
  };

  useEffect(() => {
    handleLoadDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleLoadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemons]);

  useEffect(() => {
    handleLoadHours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateSelected]);

  return (
    <Container>
      <TitleForm>
        Preencha o formulário abaixo para agendar sua consulta
      </TitleForm>
      <Form>
        <Line>
          <Column>
            <Label htmlFor="nome">Nome</Label>
            <Input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              onChange={(text) => setName(text)}
            />
          </Column>
          <Column>
            <Label htmlFor="sobrenome">Sobrenome</Label>
            <Input
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
              onChange={(text) => setMiddleName(text)}
            />
          </Column>
        </Line>
        <Line>
          <Column>
            <Label>Região</Label>
            <CustomSelect
              options={optionsRegion}
              placeholder="Selecione sua região"
              onChange={(value) => setRegionSelected(value)}
              value={regionSelected}
            />
          </Column>
          <Column>
            <Label>Cidade</Label>
            <CustomSelect
              options={optionsCity}
              placeholder="Selecione sua cidade"
              onChange={(value) => setCitySelected(value)}
              value={citySelected}
            />
          </Column>
        </Line>
        <TitleLine>
          <Title>Cadastre seu time</Title>
          <Description>Atendemos até 06 pokémons por vez</Description>
        </TitleLine>
        {selectedPokemons.map((pokemon: any, index) => (
          <PokemonLine key={index}>
            <Title>Pokemon {index + 1}</Title>
            <CustomSelect
              options={pokemonOptions}
              placeholder="Selecione um pokémon"
              onChange={(value) =>
                setSelectedPokemons((state) =>
                  state.map((item, i) =>
                    i === index ? { ...item, ["value"]: value } : item
                  )
                )
              }
              value={selectedPokemons[index].value}
              width={438}
            />
          </PokemonLine>
        ))}
        {selectedPokemons.length < 6 && (
          <NewPokemonButton
            onClick={(e) => {
              e.preventDefault();
              setSelectedPokemons([
                ...selectedPokemons,
                { value: "", label: "" },
              ]);
            }}
          >
            Adicionar novo pokémon ao time... +
          </NewPokemonButton>
        )}
        <Line>
          <Column>
            <Label>Data para Atendimento</Label>
            <CustomSelect
              options={dataOptions}
              placeholder="Selecione uma data"
              onChange={(value) => setDateSelected(value)}
              value={dateSelected}
            />
          </Column>
          <Column>
            <Label>Horário de Atendimento</Label>
            <CustomSelect
              options={hourOptions}
              placeholder="Selecione um horário"
              onChange={(value) => setSelectedHour(value)}
              value={selectedHour}
            />
          </Column>
        </Line>
        <Divider />
        <TitleLine>
          <LineInfo>
            <LabelInfo>Número de pokémons a serem atendidos:</LabelInfo>
            <LabelInfo>{selectedPokemons.length}</LabelInfo>
          </LineInfo>
          <LineInfo>
            <LabelInfo>Atendimento unitário por pokémon:</LabelInfo>
            <LabelInfo>R$ 70,00</LabelInfo>
          </LineInfo>
          <LineInfo>
            <LabelInfo>Subtotal:</LabelInfo>
            <LabelInfo>R$ {70 * selectedPokemons.length + ",00"}</LabelInfo>
          </LineInfo>
          <LineInfo>
            <LabelInfo>Taxa geracional*: </LabelInfo>
            <LabelInfo>R$ 2,10</LabelInfo>
          </LineInfo>
        </TitleLine>
        <LineInfo>
          <Total>
            Valor Total: R$ {70 * selectedPokemons.length + 2 + ",10"}
          </Total>
          <ButtonSchedule
            onClick={(e) => {
              e.preventDefault(), handleSubmit();
            }}
          >
            Concluir Agendamento
          </ButtonSchedule>
        </LineInfo>
      </Form>
      <Modal
        isOpen={formVerification.open}
        onRequestClose={() =>
          setFormVerification({
            open: false,
            title: "",
            type: "",
            message: "",
          })
        }
        style={customStyles}
        contentLabel="Example Modal"
      >
        <TitleModal className={inter.className}>
          {formVerification.title}
        </TitleModal>
        <Image
          priority
          src={formVerification.type === "Error" ? WarningSVG : CheckSVG}
          alt="Logo Pokémon"
        />
        <MessageModal className={inter.className}>
          {formVerification.message}
        </MessageModal>
        <ButtonModal
          className={inter.className}
          onClick={() => handleCloseModal()}
        >
          {formVerification.type === "Error"
            ? "Tentar novamente"
            : "Fazer novo agendamento"}
        </ButtonModal>
      </Modal>
    </Container>
  );
}

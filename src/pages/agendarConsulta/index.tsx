import React, { useEffect, useState } from "react";

import {
  Column,
  Container,
  Description,
  Form,
  Input,
  Label,
  Line,
  Title,
  TitleForm,
  TitleLine,
} from "./styles";
import CustomSelect from "../../components/CustomSelect";

export default function AgendarConsulta(): JSX.Element {
  const [dataOptions, setDataOptions] = useState([]);
  const [hourOptions, setHourOptions] = useState([]);
  const [dateSelected, setDateSelected] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

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

  useEffect(() => {
    handleLoadDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            />
          </Column>
          <Column>
            <Label htmlFor="sobrenome">Sobrenome</Label>
            <Input
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Digite seu sobrenome"
            />
          </Column>
        </Line>
        <Line>
          <Column>
            <Label>Região</Label>
            <CustomSelect
              options={optionsRegion}
              placeholder="Selecione sua região"
              onChange={(value) => setDateSelected(value)}
            />
          </Column>
          <Column>
            <Label>Cidade</Label>
            <CustomSelect
              options={optionsCity}
              placeholder="Selecione sua cidade"
              onChange={(value) => setDateSelected(value)}
            />
          </Column>
        </Line>
        <TitleLine>
          <Title>Cadastre seu time</Title>
          <Description>Atendemos até 06 pokémons por vez</Description>
        </TitleLine>
        <Line>
          <Column>
            <Label>Data para Atendimento</Label>
            <CustomSelect
              options={dataOptions}
              placeholder="Selecione uma data"
              onChange={(value) => setDateSelected(value)}
            />
          </Column>
          <Column>
            <Label>Horário de Atendimento</Label>
            <CustomSelect
              options={hourOptions}
              placeholder="Selecione um horário"
              onChange={(value) => setSelectedHour(value)}
            />
          </Column>
        </Line>
      </Form>
    </Container>
  );
}

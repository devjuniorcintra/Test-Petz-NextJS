import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoButton from "../src/components/LogoButton";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("LogoButton component", () => {
  it("deve renderizar o componente com o estado inicial", () => {
    render(<LogoButton />);

    expect(screen.getByAltText("Logo Pokémon")).toBeInTheDocument();
    expect(screen.getByText("Centro Pokémon")).toBeInTheDocument();
    expect(screen.getByText("Centro Pokémon")).toHaveStyle({
      display: "block",
    });
  });

  it("deve fechar o componente após 5 segundos", async () => {
    render(<LogoButton />);

    await waitFor(() => jest.advanceTimersByTime(5000), { timeout: 6000 });

    expect(screen.queryByText("Centro Pokémon")).toHaveStyle({
      display: "none",
    });
  });

  it("deve abrir o título quando o botão é hover", async () => {
    render(<LogoButton />);

    userEvent.hover(screen.getByRole("button"));

    await waitFor(() => jest.advanceTimersByTime(500));

    expect(screen.getByText("Centro Pokémon")).toHaveStyle({
      display: "block",
    });
  });
});

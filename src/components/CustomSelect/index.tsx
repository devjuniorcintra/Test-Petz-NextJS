import Select, { StylesConfig } from "react-select";

// import { Container } from './styles';

type Props = {
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
  onChange: (value: any) => void;
};

export default function CustomSelect({
  options,
  placeholder,
  onChange,
}: Props) {
  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      width: 265,
      backgroundColor: "#fff",
      color: "#000",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#d5d5d5",
    }),
    option: (styles) => {
      return {
        ...styles,
        width: 265,
        backgroundColor: "#fff",
        color: "#000",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#d5d5d5",
      };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({ ...styles }),
  };

  return (
    <Select
      options={options}
      styles={colourStyles}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

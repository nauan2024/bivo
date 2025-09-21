import React from "react";
import { TouchableOpacity } from "react-native";
import { ContainerButton } from "./componentsstyle";
import { TextComum } from "./componentsstyle";

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ContainerButton>
        <TextComum>{label}</TextComum>
      </ContainerButton>
    </TouchableOpacity>
  );
}

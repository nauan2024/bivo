import React from "react";
import { Logotipo, ContainerLogotipo } from "./componentsstyle";

export default function ImgLogotipo() {
  return (
      <Logotipo source={require("../../src/assets/logotipo.png")} />
  );
}

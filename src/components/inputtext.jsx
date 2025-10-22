import React from 'react';
// 1. Importe o estilo do seu arquivo central de estilos
import { CustomTextInput } from './componentsstyle';

// 2. O componente funcional que usa o estilo importado
export default function Input(props) {
  return (
    <CustomTextInput
      {...props} // Repassa todas as propriedades (value, onChangeText, etc.)
      placeholderTextColor="#A9A9A9"
    />
  );
}
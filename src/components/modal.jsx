// components/CustomModal/index.js
import React from 'react';
import { Modal } from 'react-native';
import {
  Overlay,    // View que cria o fundo escuro e centraliza o conteúdo
  Box,        // View que é a "caixa" branca do modal
  Title,      // Text para o título
  Content,    // View que envolve o children do modal
  CloseButton,
  CloseText
} from './styles';

export default function CustomModal({ visible, onClose, title, children }) {
  return (
    <Modal
      visible={visible}          // controla se o modal aparece
      transparent={true}         // permite ver o overlay (que desenhamos)
      animationType="fade"       // 'none' | 'slide' | 'fade'
      onRequestClose={onClose}   // obrigatório no Android (botão voltar)
    >
      <Overlay>
        <Box>
          <Title>{title}</Title>

          <Content>
            {children}            {/* conteúdo passado pela tela */}
          </Content>

          <CloseButton onPress={onClose}>
            <CloseText>Fechar</CloseText>
          </CloseButton>
        </Box>
      </Overlay>
    </Modal>
  );
}

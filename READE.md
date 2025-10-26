# 🚗 Bivô - Aplicativo de Estacionamento

Um aplicativo móvel de gerenciamento de estacionamento, desenvolvido em React Native. Este projeto permite o controle de entrada e saída de veículos, além da autenticação de usuários, utilizando uma API simulada com MockAPI.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 📖 Sobre o Projeto

Este aplicativo foi desenvolvido como um projeto de estudo para aplicar conceitos de desenvolvimento móvel com React Native. Ele simula um sistema de estacionamento real, onde um operador pode se autenticar, registrar a entrada de novos veículos e, posteriormente, registrar a saída deles.

## ✨ Funcionalidades Principais

* **Autenticação de Usuário:** Telas de Login e Cadastro de novos operadores.
* **Listagem Dinâmica:** A tela principal exibe **apenas** os veículos que estão atualmente no pátio (`presenca: true`).
* **Registro de Entrada:**
    * Permite registrar um veículo pela placa.
    * Lógica que **sempre cria um novo registro** (`POST`) a cada entrada.
* **Registro de Saída:**
    * Permite registrar a saída de um veículo pela placa.
    * Busca o veículo mais recente com `presenca: true` e o atualiza.
* **Recarregamento Automático:** A lista de veículos é atualizada automaticamente ao voltar para a tela principal após um registro de entrada or saída.

## 🛠️ Tecnologias Utilizadas

* **React Native:** Framework principal para o desenvolvimento do aplicativo.
* **Expo:** Utilizado para gerenciar o ambiente de desenvolvimento e build.
* **React Navigation:** Para a navegação entre as telas (Stack Navigation).
* **Styled Components:** Para a estilização dos componentes.
* **MockAPI:** Para a simulação de um backend (API REST) de forma rápida e eficiente.

## ⚙️ Configuração e Instalação

Para rodar este projeto localmente, você precisará configurar tanto o backend (MockAPI) quanto o frontend (React Native).

### 1. Backend (MockAPI)

Como o projeto utiliza uma API de simulação, você precisa criar a sua própria no [MockAPI.io](https://mockapi.io/).

1.  Crie uma conta gratuita no MockAPI.
2.  Crie um novo projeto.
3.  Crie dois **Recursos (Resources)**:

    #### Recurso 1: `Usuarios`
    (Use exatamente este nome, com "U" maiúsculo)

    Adicione os seguintes campos ao schema:
    * `Nome` (String)
    * `Email` (String)
    * `Senha` (String)

    #### Recurso 2: `carros`
    (Use exatamente este nome, com "c" minúsculo)

    Adicione os seguintes campos ao schema:
    * `placa` (String)
    * `horaEntrada` (Number)
    * `horaSaida` (Number)
    * `presenca` (Boolean)
    * `id_carro` (String) - *Observação: este campo é usado, embora o `id` automático do MockAPI também exista.*

4.  Após criar os recursos, o MockAPI lhe dará uma URL base para o seu projeto (ex: `https://[SEU_HASH_UNICO].mockapi.io/`). **Copie esta URL.**

### 2. Frontend (O Aplicativo)

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/nauan2024/bivo.git]
    cd [bivo]
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Atualize as URLs da API:**
    Esta é a etapa mais importante. Você precisa substituir a URL de API de teste pela sua URL do MockAPI que você acabou de criar.

    Abra os seguintes arquivos e substitua a URL `https://68ec4378eff9ad3b14019f4d.mockapi.io/` pela sua:

    * `src/screens/Login/Login.js`
    * `src/screens/Cadastro/Cadastro.js`
* `src/screens/Entrada/Entrada.js`
* `src/screens/Saida/Saida.js`
* `src/screens/ListaVeiculos/ListaVeiculos.js`

4.  **Rode o projeto:**
    ```bash
    npm start
    ```
    Ou, se estiver usando Expo:
    ```bash
    expo start
    ```

## 👨‍💻 Autor

* **[Nauan Laurentino Silva]**
    * [LinkedIn](www.linkedin.com/in/nauan-laurentino-silva-a545a5283
)
    * [GitHub](https://github.com/nauan2024)
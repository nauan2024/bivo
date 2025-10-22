import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ContainerCadastro, InTextcontainer, ConstainerTitle } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import Input from "../../components/inputtext";
import ImgLogotipo from "../../components/LogotipoComponent";
import OneLine from "../../components/oneLine";
import SocialIcons from "../../components/SocialIcons";
import Suporte from "../../components/Suporte";
import AnchorLogin from "../../components/AnchorLogin";

export default function Cadastro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleCadastro() {
        if (!nome.trim() || !email.trim() || !senha.trim()) {
            Alert.alert("Atenção", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const apiUrl = "https://68ec4378eff9ad3b14019f4d.mockapi.io/Usuarios";

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Nome: nome,
                    Email: email,
                    Senha: senha
                }),
            });

            if (response.ok) {
                Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");
                navigation.navigate('Home');
            } else {
                const errorText = await response.text();
                Alert.alert(
                    "Erro da API",
                    `O servidor retornou um erro (Status ${response.status}):\n${errorText}`
                );
            }
        } catch (error) {
            console.error("Erro de conexão ao cadastrar:", error);
            Alert.alert("Erro de Conexão", "Não foi possível conectar ao servidor.");
        }
    }
    return (
        <ContainerCadastro>
            <ConstainerTitle>
                <Title label={"Bivô"} />
            </ConstainerTitle>

            <ImgLogotipo />

            <InTextcontainer>
                <Input
                    placeholder="Nome :"
                    value={nome}
                    onChangeText={setNome}
                />
                <Input
                    placeholder="Email :"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    placeholder="Senha :"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </InTextcontainer>

            <Button label="Cadastrar" onPress={handleCadastro} />

            <SocialIcons />
            <OneLine />
            <Suporte />

            <AnchorLogin
                label={"Tem cadastro?"}
                anchor={"Login"}
                onPress={() => navigation.navigate("Home")}
            />
        </ContainerCadastro>
    );
}
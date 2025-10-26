import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { LoginContainer, InTextcontainer, ConstainerTitle } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import Input from "../../components/inputtext";
import Suporte from "../../components/Suporte";
import OneLine from "../../components/oneLine";
import SocialIcons from "../../components/SocialIcons";
import ImgLogotipo from "../../components/LogotipoComponent";
import AnchorLogin from "../../components/AnchorLogin";

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Atenção", "Por favor, preencha email e senha.");
            return;
        }

        try {
            const apiUrl = `https://68ec4378eff9ad3b14019f4d.mockapi.io/Usuarios?Email=${email}`;
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                // Se a resposta não for OK (ex: 404), trata como erro.
                throw new Error("Falha ao buscar usuário.");
            }

            const users = await response.json();

            if (users.length === 0) {
                Alert.alert("Erro", "Email não encontrado.");
                return;
            }

            const user = users[0];

            if (user.Senha.trim() === senha.trim()) {
                Alert.alert("Sucesso!", `Bem-vindo, ${user.Nome}!`);
                navigation.navigate('Main');
            } else {
                Alert.alert("Erro", "Senha incorreta.");
            }

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            Alert.alert("Erro de Conexão", "Não foi possível conectar ao servidor.");
        }
    }

    return (
        <LoginContainer>
            <ConstainerTitle>
                <Title label={"Bivô"} />
            </ConstainerTitle>

            <ImgLogotipo />

            <InTextcontainer>
                <Input
                    placeholder="Email :"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    placeholder="Senha :"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </InTextcontainer>

            <Button label="Entrar" onPress={handleLogin} />

            <SocialIcons />
            <AnchorLogin
                label={"não tem cadastro?"}
                anchor={"Cadastre-se"}
                onPress={() => navigation.navigate("Cadastro")}
            />
            <OneLine />
        </LoginContainer>
    );
}
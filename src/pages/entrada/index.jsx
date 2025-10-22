import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/title";
import Button from "../../components/button";
import { InTextcontainer, ConstainerTitle, Logotipo, ContainerEntrada, Line } from "./styles";
import Input from "../../components/inputtext";
import Suporte from "../../components/Suporte";

export default function Entrada() {
    const navigation = useNavigation();
    const [placa, setPlaca] = useState('');

    async function handleEntrada() {
        if (!placa.trim()) {
            Alert.alert("Atenção", "Por favor, digite a placa do veículo.");
            return;
        }

        const placaFormatada = placa.toUpperCase();
        
        try {
            const urlBusca = `https://68ec4378eff9ad3b14019f4d.mockapi.io/carros?placa=${placaFormatada}`;
            const responseBusca = await fetch(urlBusca);
            const carrosEncontrados = await responseBusca.json();

            if (carrosEncontrados.length === 0) {
                const urlCriacao = "https://68ec4378eff9ad3b14019f4d.mockapi.io/carros";
                const dadosCriacao = { 
                    placa: placaFormatada, 
                    horaEntrada: Math.floor(new Date().getTime() / 1000), 
                    horaSaida: null, 
                    presenca: true 
                };
                const responseCriacao = await fetch(urlCriacao, { 
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' }, 
                    body: JSON.stringify(dadosCriacao) 
                });
                if (!responseCriacao.ok) { 
                    const errorText = await responseCriacao.text(); 
                    throw new Error(`Falha ao criar. Servidor: ${errorText}`); 
                }
            } else {
                const carroExistente = carrosEncontrados[0];
                if (carroExistente.presenca === true) {
                    Alert.alert("Atenção", "Este veículo já se encontra no pátio.");
                    return;
                } else {
                    const urlUpdate = `https://68ec4378eff9ad3b14019f4d.mockapi.io/carros/${carroExistente.id}`;
                    const dadosUpdate = { 
                        presenca: true, 
                        horaEntrada: Math.floor(new Date().getTime() / 1000), 
                        horaSaida: null 
                    };
                    const responseUpdate = await fetch(urlUpdate, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(dadosUpdate),
                    });
                    if (!responseUpdate.ok) { 
                        const errorText = await responseUpdate.text(); 
                        throw new Error(`O servidor rejeitou a atualização. Mensagem: ${errorText}`); 
                    }
                }
            }

            Alert.alert("Sucesso", "Entrada do veículo registrada com sucesso!");
            setPlaca('');
            navigation.navigate('Main');

        } catch (error) {
            console.error("Erro detalhado no processo de entrada:", error);
            Alert.alert("Erro no Processo de Entrada", error.message);
        }
    }

    return (
        <ContainerEntrada>
            <ConstainerTitle>
                <Title label={"Registrar Entrada"} />
            </ConstainerTitle>

            <Logotipo source={require("../../../src/assets/logotipo.png")} />

            <InTextcontainer>
                <Input
                    placeholder="Placa :"
                    value={placa}
                    onChangeText={setPlaca}
                    autoCapitalize="characters"
                    maxLength={8}
                />
            </InTextcontainer>

            <Button label="Confirmar Entrada" onPress={handleEntrada} />

            <Line />
            <Suporte />
        </ContainerEntrada>
    );
}
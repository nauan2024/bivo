import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ContainerSaida, InTextcontainer, ConstainerTitle, Line } from "./styles";
import Title from "../../components/title";
import Button from "../../components/button";
import Input from "../../components/inputtext";
import ImgLogotipo from "../../components/LogotipoComponent";
import Suporte from "../../components/Suporte";

export default function Saida() {
    const navigation = useNavigation();
    const [placa, setPlaca] = useState('');

    async function handleSaida() {
        if (!placa.trim()) {
            Alert.alert("Atenção", "Por favor, digite a placa do veículo.");
            return;
        }

        const placaFormatada = placa.toUpperCase();

        try {
            const urlBusca = `https://68ec4378eff9ad3b14019f4d.mockapi.io/carros?placa=${placaFormatada}&presenca=true`;

            const responseBusca = await fetch(urlBusca);
            if (!responseBusca.ok) {
                throw new Error(`Falha na busca. Status: ${responseBusca.status}`);
            }

            const veiculosEncontrados = await responseBusca.json();

            if (veiculosEncontrados.length === 0) {
                Alert.alert("Erro", "Veículo não encontrado no pátio ou placa incorreta.");
                return;
            }

            const veiculoParaSair = veiculosEncontrados[0];

            const urlUpdate = `https://68ec4378eff9ad3b14019f4d.mockapi.io/carros/${veiculoParaSair.id}`;

            const dadosSaida = {
                horaSaida: Math.floor(new Date().getTime() / 1000),
                presenca: false,
            };

            const responseUpdate = await fetch(urlUpdate, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosSaida),
            });

            if (responseUpdate.ok) {
                Alert.alert("Sucesso", "Saída do veículo registrada com sucesso!");
                setPlaca('');
                navigation.navigate('Main');
            } else {
                const errorText = await responseUpdate.text();
                throw new Error(`Falha ao registrar saída: ${errorText}`);
            }

        } catch (error) {
            console.error("Erro no processo de saída:", error);
            Alert.alert("Erro", `Ocorreu um erro ao processar a saída: ${error.message}`);
        }
    }
    return (
        <ContainerSaida>
            <ConstainerTitle>
                <Title label={"Registrar Saída"} />
            </ConstainerTitle>

            <ImgLogotipo />

            <InTextcontainer>
                <Input
                    placeholder="Placa :"
                    value={placa}
                    onChangeText={setPlaca}
                    autoCapitalize="characters"
                    maxLength={8}
                />
            </InTextcontainer>
            
            <Button label="Confirmar Saída" onPress={handleSaida} />

            <Line />
            <Suporte />
        </ContainerSaida>
    );
}
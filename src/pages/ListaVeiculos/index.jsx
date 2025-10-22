import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, FlatList, View } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";

// Seus imports de componentes e estilos
import { ContainerListaVeiculos, Upbar, Logotipo, Downbar } from "./styles";
import ComponentTitleLeft from "../../components/ComponentTitleLeft";
import Cards from "../../components/cards";
import Button from "../../components/button";

export default function ListaVeiculos() {
    const navigation = useNavigation();
    const isFocused = useIsFocused(); 

    // Estados para guardar os dados, o carregamento e possíveis erros
    const [veiculos, setVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


async function fetchVeiculos() {
    setLoading(true);
    setError(null);
    try {
        const apiUrl = "https://68ec4378eff9ad3b14019f4d.mockapi.io/carros?presenca=true"; 
        
        const response = await fetch(apiUrl);
        const data = await response.json();

       
        if (Array.isArray(data)) {
            const veiculosValidos = data.filter(veiculo => veiculo && veiculo.placa);
            setVeiculos(veiculosValidos);
        } else {
            console.error("A API não retornou um array como esperado:", data);
            setVeiculos([]);
        }

    } catch (e) {
        setError("Não foi possível carregar a lista de veículos.");
        console.error("Erro ao buscar veículos:", e);
    } finally {
        setLoading(false);
    }
}

    useEffect(() => {
        if (isFocused) {
            fetchVeiculos();
        }
    }, [isFocused]);

    const formatTimestamp = (timestamp) => {
        if (!timestamp) return { data: '-', hora: '-' };
        const date = new Date(timestamp * 1000);
        const formattedDate = date.toLocaleDateString('pt-BR');
        const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return { data: formattedDate, hora: formattedTime };
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#003554" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{error}</Text>
            </View>
        );
    }

    return (
        <ContainerListaVeiculos>
            <Upbar>
                <ComponentTitleLeft Label={"Veículos no Pátio"} />
                <Logotipo source={require("../../../src/assets/logotipo.png")} />
            </Upbar>

            <FlatList
                data={veiculos}
                keyExtractor={(item) => item.id_carro}
                renderItem={({ item }) => {
                    const { data, hora } = formatTimestamp(item.horaEntrada);
                    return <Cards placa={item.placa} data={data} hora={hora} />;
                }}
                contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
                ListEmptyComponent={
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Text style={{ color: 'gray', fontSize: 16 }}>Nenhum veículo no pátio.</Text>
                    </View>
                }
            />

            <Downbar>
                <Button label="Entrada" onPress={() => navigation.navigate("Entrada")} />
                <Button label="Saida" onPress={() => navigation.navigate("Saida")} />
            </Downbar>
        </ContainerListaVeiculos>
    );
}
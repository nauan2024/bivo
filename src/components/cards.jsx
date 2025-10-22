import React from 'react';
// Seus imports de componentes de estilo
import { CardInfo, ComponentContainerCards, CamposCards, InfoCards, Backbar } from "./componentsstyle";

// --- A MUDANÇA ESTÁ AQUI ---
// O componente agora espera receber 'placa', 'data' e 'hora'
export default function Cards({ placa, data, hora }) {
    return (
        <CardInfo>
            <ComponentContainerCards>
                <Backbar>
                    <CamposCards>Placa:</CamposCards>
                    {/* Exibe a placa recebida via props */}
                    <InfoCards>{placa}</InfoCards>
                </Backbar>

                <Backbar>
                    <CamposCards>Hora:</CamposCards>
                    {/* Exibe a hora recebida via props */}
                    <InfoCards>{hora}</InfoCards>
                </Backbar>

                <Backbar>
                    <CamposCards>Data:</CamposCards>
                    {/* Exibe a data recebida via props */}
                    <InfoCards>{data}</InfoCards>
                </Backbar>
            </ComponentContainerCards>
        </CardInfo>
    );
}
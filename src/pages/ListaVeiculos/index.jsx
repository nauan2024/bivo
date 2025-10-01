import { ContainerListaVeiculos } from "./styles";
import { Upbar } from "./styles";
import ComponentTitleLeft from "../../components/ComponentTitleLeft";
import { Logotipo } from "./styles";
import { ContainerCards } from "./styles";
import Cards from "../../components/cards";
import { Downbar } from "./styles";
import Button from "../../components/button";
import DoubleLines from "../../components/doublelines";
import { ButtonDad } from "../login/styles";
import { useNavigation } from "@react-navigation/native";


export default function ListaVeiculos() {
    
        const navigation = useNavigation()

    return (
        <ContainerListaVeiculos>
            <Upbar>
                <ComponentTitleLeft Label={"Bivô"}></ComponentTitleLeft>
                <Logotipo source={require("../../../src/assets/logotipo.png")}></Logotipo>
            </Upbar>
            <ContainerCards>
                <Cards />
                <DoubleLines />
                <Cards />
                <DoubleLines />
                <Cards />
                <DoubleLines />
                <Cards />
                <DoubleLines />
            </ContainerCards>
            <Downbar>
                <Button label="Entrada" onPress={() => navigation.navigate("Entrada")}></Button>
                <Button label="Saida" onPress={() => navigation.navigate("Saida")}></Button>                
            </Downbar>

        </ContainerListaVeiculos>
    )
}
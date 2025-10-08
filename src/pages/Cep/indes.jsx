import { Pressable, TextInput, View,Text } from "react-native";
import { useState } from "react";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { TouchableOpacity } from "react-native";


const fruits = ["uva", "coco", "banana"]
fruits.forEach((fruits) => {
    // traz todos dentro do array
    console.log(fruits)
})

const data = {
    
  "cep": "04912-110",
  "logradouro": "Avenida Hamilton",
  "complemento": "",
  "unidade": "",
  "bairro": "Guarapiranga",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"

}

data.logradouro


export default function Cep() {
    const [cep, setcep] = useState('')
    const [data, setData] = useState(null)

    function buscaCep(
        
    ) {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log("Erro:", err)
        })
    }
    return (
        <View>
            <TextInput 
            placeholder="Digite seu Cep"
            keyboardType="numeric"
            onChangeText={setcep} 
            value={cep}
            />

            <TouchableOpacity onPress={buscaCep}>
            <Text>Buscar CEP</Text>
            </TouchableOpacity>
            {
                data && <Text>{data.bairro}</Text>
            }

        </View>
    )
}


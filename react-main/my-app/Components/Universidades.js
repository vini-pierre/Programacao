import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EntradasUniv } from './EntradasUniversidades'
import { RenderLista } from './RenderLista'
import { ExibirMensagem } from './ExibirMensagem'

export default function Universidades() {
    const [mensagem, atualizarMensagem] = useState('');
    const [resultado, atualizarLista] = useState([]);

    const atualizaMensagem = (txt) => {
        atualizarMensagem(txt);
    }

    const exibirUniversidade = (item) => {
        return <View style={styles.lista}>
                <Text>{item.name}</Text>
            </View>;
    }

    return (
        <View style={styles.container}>
            <EntradasUniv callBackMensagem={atualizaMensagem} callBackatualizar={atualizarLista}/>
            <ExibirMensagem mensagem={mensagem}/>
            <RenderLista resultado={resultado} callBackexibir={exibirUniversidade}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0fff',
      alignItems: 'center',
      marginTop: 25,
    },
    lista: {
      padding: 10,
      margin: 5,
    },
});

module.exports.Universidades = Universidades;
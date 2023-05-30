import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EntradasUniversidades } from './EntradasUniversidades'
import { RenderLista } from './RenderLista'
import { MostrarMensagem } from './MostrarMensagem'

export default function Universidades() {
    const [mensagem, atualizarMsg] = useState('');
    const [resultado, atualizarLista] = useState([]);

    const atualizaMsg = (txt) => {
        atualizarMsg(txt);
    }

    const mostrarUniversidade = (item) => {
        return <View style={styles.lista}>
                <Text>{item.name}</Text>
            </View>;
    }

    return (
        <View style={styles.container}>
            <EntradasUniversidades callBackMensagem={atualizaMsg} callBackatualizar={atualizarLista}/>
            <MostrarMensagem mensagem={mensagem}/>
            <RenderLista resultado={resultado} callBackexibir={mostrarUniversidade}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9F2B68',
      alignItems: 'center',
      marginTop: 25,
    },
    lista: {
      padding: 5,
      margin: 5,
      paddingLeft: 15,
      paddingRight: 15,
    },
});

module.exports.Universidades = Universidades;
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

const EntradasUniversidades = (props) => {

    const [nome, atualizarNome] = useState('');
    
    const [pais, atualizarPais] = useState('');

    const atualizaNome = (txt) => {
        atualizarNome(txt);
    }
  
    const atualizaPais = (txt) => {
        atualizarPais(txt);
    }

    const pesquisar = () => {
        console.log("País:", pais, "Nome:", nome);
        if (pais == '' & nome == '') {
          props.callBackMensagem("Insira um Nome e um País");
          props.callBackatualizar('');
        } else {
          props.callBackMensagem("Resultado");
          if (pais == '') {
            fetch('http://universities.hipolabs.com/search?name=' + nome).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          } else if (nome == '') {
            fetch('http://universities.hipolabs.com/search?country=' + pais).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          } else {
            fetch('http://universities.hipolabs.com/search?name=' + nome + '&pais=' + pais).then((response) => response.json()).then((res) => {
              let listaUniv = res;
              props.callBackatualizar(listaUniv);
            }).catch((error) => {
              console.error(error);
            });
          }
        }
      }

    return <>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TextInput style={styles.input} 
                            placeholder='Pais:'
                            onChangeText={atualizaPais}
                            value={pais}/>
            </View>
            <View style={{alignItems: "center"}}>
              <TextInput style={styles.input} 
                            placeholder='Name:'
                            onChangeText={atualizaNome}
                            value={nome}/>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 17}}>
                <Button title='Buscar:' onPress={pesquisar}/>
            </View>
          </>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        width: 375,
        borderWidth: 1,
        padding: 15,
      },
})

module.exports.EntradasUniversidades = EntradasUniversidades;
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

const EntradasUniversidades = (props) => {

    const [nome, atualizarNome] = useState('');
    
    const [pais, atualizarPais] = useState('');

    const mudaNome = (txt) => {
        atualizarNome(txt);
    }
  
    const mudaPais = (txt) => {
        atualizarPais(txt);
    }

    const pesquisar = () => {
        if (pais == '' & nome == '') {
          props.callBackMensagem("Insira um campo.");
          props.callBackatualizar('');
        } else {
          props.callBackMensagem("Resultado");
          if (pais == '') {
            fetch('http://universities.hipolabs.com/search?name=' + nome).then((response) => response.json()).then((res) => {
              let listaUniversidades = res;
              props.callBackatualizar(listaUniversidades);
            }).catch((error) => {
              console.error(error);
            });
          } else if (nome == '') {
            fetch('http://universities.hipolabs.com/search?country=' + pais).then((response) => response.json()).then((res) => {
              let listaUniversidades = res;
              props.callBackatualizar(listaUniversidades);
            }).catch((error) => {
              console.error(error);
            });
          } else {
            fetch('http://universities.hipolabs.com/search?name=' + nome + '&country=' + pais).then((response) => response.json()).then((res) => {
              let listaUniversidades = res;
              props.callBackatualizar(listaUniversidades);
            }).catch((error) => {
              console.error(error);
            });
          }
        }
      }

    return <>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <TextInput style={styles.input} 
                            placeholder='Country'
                            onChangeText={mudaPais}
                            value={pais}/>
            </View>
            <View style={{alignItems: "center"}}>
              <TextInput style={styles.input} 
                            placeholder='Name'
                            onChangeText={mudaNome}
                            value={nome}/>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 17}}>
                <Button color = "blue" title='Pesquisar' onPress={pesquisar}/>
            </View>
          </>
}

const styles = StyleSheet.create({
    input: {
        height: 43,
        margin: 15,
        width: 375,
        borderWidth: 1,
        padding: 10,
      },
})

module.exports.EntradasUniversidades = EntradasUniversidades;
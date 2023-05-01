import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [numero, atualizarNumero] = useState(0);
  const [texto, atualizarTexto] = useState('0');

  const incrementar = () => {
    let novoNumero = numero;
    novoNumero++;
    atualizarNumero(novoNumero);
    console.log('onPress!!!', novoNumero);
  }

  const EntradaGasto = (props) => {

  const [texto, atualizarTexto] = useState('');
  const [valor, atualizaValor] = useState(0.0);
  const [totalGasto, atualizaTotalGasto] = useState(0.0);

  const atualizaTexto = (txt) => {
    console.log(txt);
    atualizarTexto(txt);
  }

  const incluirGasto = () => {
    var totalAtual = parseFloat(totalGasto);
    totalAtual = totalAtual + parseFloat(valor);
    atualizaTotalGasto(totalAtual);
    props.callBackIncluir(texto);

  }

  const novoValor = () => {
    atualizarNumero(parseInt(texto));
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
                 placeholder='Novo Gasto'
                 onChangeText={atualizaTexto}
                 value={texto}/>
      <View style ={{flexDirection: "row", alighItems: "center"}}> 
        <TextInput style={styles.input2} 
                  placeholder='Valor do Gasto'
                  onChangeText={atualizaValor}
                  value={texto}/>
          <Button title='Incluir' onPress={incluirGasto}/>
      </View>
      <Text style={styles.total}>Total do Gasto: R$WEFQFWEFSJBHaBNgyNy*Anquim*YWena</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  texto: {
    backgroundColor: 'yellow',
    fontSize: 32
  }
});

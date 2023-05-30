import { StyleSheet, Text } from 'react-native';

const ExibirMensagem = (props) => {
    return <Text style={styles.mensagem}>{props.mensagem}</Text>
}

const styles = StyleSheet.create({
    mensagem: {
        margin: 20,
        fontSize: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

module.exports.ExibirMensagem = ExibirMensagem;
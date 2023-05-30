import { StyleSheet, Text } from 'react-native';

const MostrarMensagem = (props) => {
    return <Text style={styles.mensagem}>{props.mensagem}</Text>
}

const styles = StyleSheet.create({
    mensagem: {
        margin: 20,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

module.exports.MostrarMensagem = MostrarMensagem;
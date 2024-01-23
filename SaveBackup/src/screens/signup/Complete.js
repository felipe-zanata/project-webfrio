import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import Logo from '../../../assets/imgs/WebFrio.png';
import Tick from '../../../assets/imgs/tick.png';
import layoutStyles from "../../layoutStyles";

export default props => {

    return (
        <SafeAreaView style={styles.background}>
            <Image source={Logo} style={styles.logo} />
                <Image source={Tick}
                    style={styles.imagem} />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text style={styles.title}>Cadastro efetuado com sucesso</Text>
                    <Text style={styles.subtitle}>Aguarde até 24 horas para que inicie o uso completo do sistema</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Permission')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Ir para o Menu</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    background: layoutStyles.background,
    scrollView: layoutStyles.scrollView,
    logo: layoutStyles.logo,
    formContainer: layoutStyles.formContainer,
    section: layoutStyles.section,
    title: layoutStyles.title,
    subtitle: layoutStyles.subtitle,
    inputText: layoutStyles.inputText,
    button: layoutStyles.button,
    buttonText: layoutStyles.buttonText,
    imagem: {
        marginTop: 50,
        width: '70%', 
        height: 170,
        resizeMode: 'contain',  
        alignSelf: 'center'
    },
});

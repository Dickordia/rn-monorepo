import React, { useState, 
                useEffect } from 'react'
import { Text,
         View, 
         TextInput,
         StyleSheet,
         ActivityIndicator,
         KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux'

import Button from '../../views/Button';
import { actions } from '../../store'
import { getNavigation } from '../../router/Router';


function Login(props) {
    const { loading } = props
    
    if (loading) {
        return (
            <View style={style.container}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }

    
    const [username, setUsername] = useState(props.userID)
    const [password, setPassword] = useState('secret')
    const navigation = getNavigation()

    const onLoginPress = () => {
        props.login( username, password, () => { navigation.push('content') });
    };

    const onChangeTextLogin = (aLogin) => {
        setUsername(aLogin);
    };

    const onChangeTextPassword = (aPassword) => {
        setPassword(aPassword);
    };

    const isCredential = username.trim() !== '' && password.trim() !== ''

    return (
        <KeyboardAvoidingView behavior="padding" style={style.container}>
            <View style={style.loginContainer}>
                <TextInput
                    style={style.input}
                    tintColor={'white'}
                    selectionColor={'white'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholder='Login'
                    placeholderTextColor="#36454f"
                    onChangeText={onChangeTextLogin}
                    value={username}
                />
                <TextInput
                    selectionColor={'white'}
                    tintColor={'white'}
                    style={style.input}
                    returnKeyType='go'
                    placeholder="Password"
                    placeholderTextColor="#36454f"
                    secureTextEntry
                    onChangeText={onChangeTextPassword}
                    value={password}
                />
                <Button 
                    onPress={onLoginPress}
                    disabled={!isCredential}
                    style={{width:'84%'}}>
                    LOGIN
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23315f'
    },
    buttonContainer: {
        width: 274,
        alignItems: 'center',
        backgroundColor: '#6e7f80',
        paddingVertical: 15,
        borderRadius: 8,
        borderColor: '#536878',
        borderWidth: 4,
    },
    loginContainer: {
        width: 340,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 12,
        borderColor: '#536bcd',
        borderWidth: 4,
    },
    logo: {
        width: 300,
        height: 100,
    },
    buttonText: {
        height: 18,
        width: 274,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#36454f',
    },
    formContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        width: '84%',
        backgroundColor: '#0088c9',
        marginBottom: 10,
        padding: 10,
        color: '#fffddd',
        fontSize: 20,
        fontWeight: '600',
        borderRadius: 4,
        borderWidth: 2,
        borderColor:'#49c3b1'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff',
    },
});


const LoginScreen = connect(
    (state) => ({
        loading: state.app.loading,
        userID: state.user.userId,
    }),
    {
        login: actions.user.login
    }
)(Login)

export default LoginScreen
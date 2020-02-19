import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2c3e5A',
    },

    buttonContainer: {
        width: 274,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6e7f80',
        borderRadius: 8,
        borderColor: '#536878',
        borderWidth: 4,
    },

    loginContainer: {
        alignItems: 'center',
        paddingVertical: 15,
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
        width: 274,
        backgroundColor: '#536878',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        borderRadius: 4,
    },

    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff',
    },
});

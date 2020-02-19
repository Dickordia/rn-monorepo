import React from 'react';
import { View, Platform, Text } from 'react-native';

import Button from '../Button';
import { connect } from 'react-redux'

const aBackImg = require('../../assets/img/BackIcon.png');
const aLogoutImg = require('../../assets/img/LogoutIcon.png');

function HeaderView(props) {    
    const onLogOut = () => {
        if (Platform.OS == 'web') {
            props.navigation.logout()
        } else {
            props.navigation.navigate('login')
        }
    }

    const onBack = () => {
        if (Platform.OS == 'web') {
            props.navigation.landscape()
        } else {
            props.navigation.navigate('landscape')
        }
    }


    const aSize = Platform.OS == 'web' ? 50 : 30
    const aHeight = Platform.OS == 'web' ? '10%' : 80
    const aTop = Platform.OS == 'ios' ? '20%' : 0
    const isBack = Platform.OS == 'web' ? (props.navigation.location() == '/landscape') : (props.scene.__memo[0].name == 'landscape')
    
    return (    
        <View style={{ height: aHeight, backgroundColor: '#2a4f8f', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between'}}>
            <Button style={{ width: aSize, height: aSize, marginRight: '5%', backgroundColor: 'transparent', borderWidth: 0 }}
                image={aLogoutImg} imageStyle={{ width: aSize, height: aSize }}
            
            onPress={onLogOut} />
            <Button style={{ width: aSize, height: aSize, marginLeft: '5%', 
                             backgroundColor: 'transparent', 
                             borderWidth: 0
                            }}
                    imageStyle={{ width: aSize, height: aSize }}
                    image={aBackImg}  
                hidden={isBack}
            color='#432143' onPress={onBack} />

            <View style={{
                left: '30%', right: '30%', top: aTop, width: '40%', height: '100%',
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute'
            }}>
                <Text style={{ fontSize: 20, fontWeight: '500', fontStyle: 'italic' }}>{props.username}</Text>
            </View>
        </View>
    )
}

const Header = connect(
    (state) => ({
        username: state.user.userId,
    })
)(HeaderView)

export default Header
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

type ButtonProps = {
    style?: any,
    image?: ImageSourcePropType,
    imageStyle?: any,
    textStyle?: any,
    children?: any,
    disabled?: boolean,
    hidden?: boolean,
    selected?: boolean,
    onPress?: () => void,    
}    

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4dbd05',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ffffff',
    },

    text: {
        margin: 8,
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default function Button(props: ButtonProps) {
    if (props.hidden) {
        return null
    } 

    const { style, textStyle, selected, imageStyle, image, children, disabled, onPress } = props
    const [isFocused, setIsFocused] = useState(false);

    const onFocusHandler = () => {
        setIsFocused(true)
    }

    const onUnFocusHandler = () => {
        setIsFocused(false)
    }

    const aOpacity = disabled ? 0.5 : 1
    const aBorderWidth = image ? 0 : (selected ?  10 : 2)
    const aBorderColor = selected ? 'brown' : ((!disabled && isFocused) ? 'black' : 'white')

    const RenderContent = () => {
        if (image) {
           return <Image style={imageStyle} source={image} />
        } else {
            return <Text style={[styles.text, textStyle]}>{children}</Text>
        }
    }

    return (       
        <TouchableOpacity 
            disabled={disabled}
            onPress={onPress}
            onMouseEnter={onFocusHandler}
            onMouseLeave={onUnFocusHandler}
            style={[styles.container, style, { opacity: aOpacity, borderColor: aBorderColor, borderWidth: aBorderWidth}]}>
            <RenderContent />
        </TouchableOpacity>
    )
}




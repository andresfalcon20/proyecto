import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { KeyboardTypeOptions } from 'react-native'

interface Props {
    placeholder: string,
    handleChange: (name: string, value: string) => void;
    name: string;
    keyboardType?: KeyboardTypeOptions;  
    isPassword?: boolean; 
}
export const InputComponent = ({placeholder, keyboardType='default', handleChange, name, isPassword= false}: Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType={keyboardType}
    onChangeText={(value) =>handleChange(name, value)}
    secureTextEntry={isPassword}
    style={styles.inputText}/>
  )
}
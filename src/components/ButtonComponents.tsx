import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    tittle: string;
    handlesendInfo: () => void
}

export const ButtonComponents = ({tittle, handlesendInfo}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonForm} 
    onPress={handlesendInfo}>
        <Text style={styles.buttonText}>{tittle}</Text>
    </TouchableOpacity>
  )
}
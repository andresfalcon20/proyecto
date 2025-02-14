import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { TittleComponents } from '../components/TittleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent'
import { ButtonComponents } from '../components/ButtonComponents'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../theme/commons/constants';

interface Props {
  users: User[]; 
}

interface LoginForm{
  email: string;
  password: string
}

export const LoginScreen = ({users}: Props) => {
   const [LoginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleChange = (name: string, value: string): void => {
    console.log(name, value);
    setLoginForm({...LoginForm, [name]: value});
  }

  const verifyUser = (): User | undefined =>{
    const existUser = users.find(user => user.email === LoginForm.email && user.password === LoginForm.password);
    return existUser;
  }

  const handleLogin = (): void=>  {
    if(LoginForm.email === '' || LoginForm.password === ''){
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    } 

    if(!verifyUser()){
      Alert.alert('Error', 'El usuario no existe');
      return;
    }
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
    //console.log(loginForm);
      
}
  return (
    <View>
        <StatusBar backgroundColor= {PRIMARY_COLOR} />
        <TittleComponents title="Iniciar Sesión"/>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <BodyComponents>
          
            <Text style={styles.tittlePrincipal}>
              Bienvenido 
            </Text>
            <Text style={styles.textDescription}>
            "El tiempo es un lujo. Bienvenido, donde cada segundo cuenta con estilo y precisión." ⌚✨
            </Text>
            <View style={styles.containerForm}> 

              <InputComponent placeholder='Correo' keyboardType='email-address' handleChange={handleChange} name='email' />

              <InputComponent placeholder='Contraseña' handleChange={handleChange} name='password'
              isPassword={hiddenPassword}/>
              <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'} size={20} 
              color={TERTIARY_COLOR}
              onPress={() => sethiddenPassword(!hiddenPassword)}
              style={styles.IconPassword} />
            </View>
            <ButtonComponents tittle='Iniciar Sesión' handlesendInfo={handleLogin}/>
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Register'}))}>
              <Text style={styles.textRedirect}>No tienes una cuenta? Registrate aquí</Text>
            </TouchableOpacity>
        </BodyComponents>
    </View>
  )
}
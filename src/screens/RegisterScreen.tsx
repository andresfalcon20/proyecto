import React, { useState } from 'react'
import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../theme/commons/constants'
import { TittleComponents } from '../components/TittleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent';
import { ButtonComponents } from '../components/ButtonComponents'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons'


interface Props{
    users: User[];
    addUsers: (user: User) => void
}



interface RegisterForm{
    name: string;
    lastname: string;
    email: string;
    address: string;
    password: string;
    confirm_password: string;
}

export const RegisterScreen = ({users, addUsers}: Props) => {
    
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        lastname: '',
        email: '',
        address: '',
        password: '',
        confirm_password: ''
    });
      const [hiddenPassword, sethiddenPassword] = useState<boolean>(true);
    
    const navigation = useNavigation();


    const handleChange = (name: string, value: string): void => {
        console.log(name, value);
        setRegisterForm({...registerForm, [name]: value});
    }

    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === registerForm.email && user.password === registerForm.password);
        return existUser;
    }

    const getIdNewUser = (): number => {
        const getIdUser = users.map(user => user.id);
        return Math.max(...getIdUser) + 1;   //[1,2, 3]
    }
    
    const handleRegister = ()=> {
        if(registerForm.name === '' || registerForm.email === '' || registerForm.password === ''){
            Alert.alert('Error!', 'Todos los campos son obligatorios');
            return;
            
        }
        if(verifyUser()){
            Alert.alert('Error!', 'El usuario ya existe');
            return;
        }

        const newUser: User = {
            id: getIdNewUser(),
            name: registerForm.name,
            email: registerForm.email,
            password: registerForm.password
        }

        //Agregar nuevo usuario al arreglo users
        addUsers(newUser)
        Alert.alert('Registro', 'Usuario registrado con éxito')
        //Redireccionar al login
        navigation.goBack();
        //console.log(registerForm);

    }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TittleComponents title="Regístrate"/>
        <Image 
        source={require('../../assets/logo1.png')}
        style={styles.logo1} />
        <BodyComponents>
            <Text style={styles.tittlePrincipal}>
                Tiempo de Elegancia, Precisión a un Clic.
            </Text>
            <Text style={styles.textDescription}>
                Bienvenido al tiempo perfecto. Regístrate y descubre elegancia en cada segundo. ⌚
            </Text>
            <View style={styles.containerForm}>
                <InputComponent placeholder='Nombre'
                handleChange={handleChange} 
                name='name'/>
                <InputComponent placeholder='Apellido'
                 handleChange={handleChange} 
                 name='lastname'/>
                <InputComponent placeholder='Correo' 
                keyboardType='email-address'
                handleChange={handleChange} 
                name='email'/>
                <InputComponent placeholder='Dirección' 
                handleChange={handleChange} 
                name='address'/>
                <InputComponent placeholder='Contraseña'
                 handleChange={handleChange}
                 isPassword={hiddenPassword} 
                 name='password'/>
                 <InputComponent placeholder='Confirmar Contraseña'
                 handleChange={handleChange} 
                 isPassword={hiddenPassword}
                 name='confirm_password'/>
                 <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'} size={20} 
                    color={TERTIARY_COLOR}
                    onPress={() => sethiddenPassword(!hiddenPassword)}
                    style={styles.IconPassword1} />
                <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'} size={20} 
                    color={TERTIARY_COLOR}
                     onPress={() => sethiddenPassword(!hiddenPassword)}
                    style={styles.IconPassword2} />
            </View>
            <ButtonComponents tittle="Registrarme" handlesendInfo={handleRegister}/>
            <TouchableOpacity onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Login'}))}>
                <Text style={styles.textRedirect}>Ya tienes una cuenta? Inicia aquí</Text>
            </TouchableOpacity>
        </BodyComponents>
    </View>
  )
}
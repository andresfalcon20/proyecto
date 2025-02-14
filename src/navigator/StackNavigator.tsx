import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

 export interface User{
  id: number;
  name: string;
  email: string,
  password: string
}

const users: User[] = [
  {id: 1, name: 'Jean', email: 'jitaz@gmail.com', password: '0993643838Jc'},
  {id: 2, name: 'Ariel', email: 'ariel28@gmail.com', password: '221000'},
  {id: 3, name: 'Luis', email: 'luis@gmail.com', password: '123456'},
  {id: 4, name: 'Cristian', email: 'a', password: 'abc'},
]

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const [usersManager, setUsersManager] = useState<User[]>(users);

  const addUsers = (user: User): void => {
    setUsersManager([...usersManager, user]);
  }

  return (
    <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: PRIMARY_COLOR
        }
      }}>
        <Stack.Screen name="Login" 
        options={{ headerShown: false }} 
        children={()=><LoginScreen users={usersManager}/>}/>
        <Stack.Screen name="Register" 
        options={{ headerShown: false }} 
        children={()=><RegisterScreen users={usersManager} addUsers={addUsers}/>} />
        <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}/>
    </Stack.Navigator>
  );
}
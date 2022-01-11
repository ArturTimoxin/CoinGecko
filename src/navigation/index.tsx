import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import CoinScreen from '../screens/Coin';

export type RootStackParamList = {
  Home: undefined;
  Coin: {
    id: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Coin" component={CoinScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

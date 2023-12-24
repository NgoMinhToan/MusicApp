import useSetCustomTheme from '@hooks/useSetCustomTheme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';
// import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OnboardingScreen from '@screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const {navigationTheme} = useSetCustomTheme();
  // const {height} = Dimensions.get('window');
  return (
    <SafeAreaView style={{height: '100%'}}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNavigator;

import React, {PropsWithChildren} from 'react';
import {StatusBar, View} from 'react-native';
import AppbarHeader from './AppbarHeader';
import {useTheme} from 'react-native-paper';
import AppbarBottom from './AppbarBottom';

const AppbarCustom: React.FC<PropsWithChildren> = ({children}) => {
  const {colors} = useTheme();
  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor={colors.primary} />
      <AppbarHeader />
      {children}
      <AppbarBottom />
    </View>
  );
};

export default AppbarCustom;
export {AppbarHeader, AppbarBottom};

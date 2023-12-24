import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/navigators/MainNavigator';
import useSetCustomTheme from '@hooks/useSetCustomTheme';

function App(): JSX.Element {
  const {paperTheme, isDarkMode} = useSetCustomTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={backgroundStyle}>
        <MainNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;

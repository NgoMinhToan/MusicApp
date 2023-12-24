import {DefaultTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {
  adaptNavigationTheme,
  MD3LightTheme,
  MD3DarkTheme,
} from 'react-native-paper';
import customAppTheme from '@constants/customAppTheme';

const LightPaperTheme = {
  ...MD3LightTheme,
  ...customAppTheme,
  colors: {...MD3LightTheme.colors, ...customAppTheme.colors},
};
const DarkPaperTheme = {
  ...MD3DarkTheme,
  ...customAppTheme,
  colors: {...MD3DarkTheme.colors, ...customAppTheme.colors},
};

const {LightTheme: LightNavigationTheme, DarkTheme: DarkNavigationTheme} =
  adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
    reactNavigationDark: DefaultTheme,
    materialLight: LightPaperTheme,
    materialDark: DarkPaperTheme,
  });

const useSetCustomTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const paperTheme = isDarkMode ? DarkPaperTheme : LightPaperTheme;
  const navigationTheme = isDarkMode
    ? DarkNavigationTheme
    : LightNavigationTheme;

  return {paperTheme, navigationTheme, colorScheme, isDarkMode};
};

export type AppTheme = typeof LightPaperTheme;

export default useSetCustomTheme;

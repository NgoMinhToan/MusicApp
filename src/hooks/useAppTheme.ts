import {AppTheme} from '@hooks/useSetCustomTheme';
import {useTheme} from 'react-native-paper';

export const useAppTheme = () => useTheme<AppTheme>();

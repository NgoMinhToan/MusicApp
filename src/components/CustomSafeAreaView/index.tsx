import {StyleSheet, View, ViewProps} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomSafeAreaView: React.FC<PropsWithChildren<ViewProps>> = ({
  children,
  style,
}) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    onlyView: {
      flex: 1,
      paddingLeft: insets.left,
      paddingBottom: insets.bottom,
      paddingRight: insets.right,
      paddingTop: insets.top,
    },
  });

  const combinedStyle = StyleSheet.flatten([styles.onlyView, style]);
  return <View style={combinedStyle}>{children}</View>;
};

export default CustomSafeAreaView;

import React from 'react';
import CustomIndicator from '@components/CustomIndicator';
import {StyleSheet, View} from 'react-native';
import {useAppTheme} from '@hooks/useAppTheme';

const Loading = () => {
  const {myColors} = useAppTheme();

  const styles = StyleSheet.create({
    loadingView: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: myColors.darks.dark_1,
    },
  });
  return (
    <View style={styles.loadingView}>
      <CustomIndicator />
    </View>
  );
};

export default Loading;

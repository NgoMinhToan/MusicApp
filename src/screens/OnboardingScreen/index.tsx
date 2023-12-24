import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useAppTheme} from '@hooks/useAppTheme';
import CustomSafeAreaView from '@components/CustomSafeAreaView';

const OnboardingScreen = () => {
  const {myColors} = useAppTheme();

  const styles = StyleSheet.create({
    onboardingView: {
      backgroundColor: myColors.darks.dark_1,
    },
  });

  return (
    <CustomSafeAreaView style={styles.onboardingView}>
      <Onboarding
        titleStyles={{backgroundColor: 'white'}}
        pages={[
          {
            backgroundColor: myColors.darks.dark_1,
            image: <ImageOnboarding />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: myColors.darks.dark_2,
            image: <ImageOnboarding />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </CustomSafeAreaView>
  );
};

export default OnboardingScreen;

const ImageOnboarding = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        width: '100%',
      }}>
      <Image
        style={{objectFit: 'contain', width: '100%'}}
        source={require('@assets/onboarding_1.png')}
      />
    </View>
  );
};

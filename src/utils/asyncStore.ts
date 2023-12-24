import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: Record<string, any>) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
    console.log('AsyncStore_storeData_error:', e);
  }
};

export const getData: Record<string, any> = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('AsyncStore_getData_error:', e);
  }
};

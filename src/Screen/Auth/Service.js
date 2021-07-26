import AsyncStorage from '@react-native-async-storage/async-storage';

const Islogin = async (isName, isPass) => {
  try {
    await AsyncStorage.setItem('log', JSON.stringify(true));
    const value = JSON.parse(await AsyncStorage.getItem('log'));
  } catch (error) {
    // Error saving data
    console.log(error, 'err');
  }
};

// isName==true && isPass==true
export default Islogin;
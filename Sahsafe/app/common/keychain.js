import * as Keychain from 'react-native-keychain';

import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key, value) => {
  try {
    await Keychain.setInternetCredentials('Clout', key, value);
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}

const get = async (key) => {
  try {
    const value = await Keychain.getInternetCredentials('Clout');
    return value.password;
  } catch (error) {
    console.log(error)
    return false;
  }
}

const reset = async () => {
  try {
    await Keychain.resetInternetCredentials('Clout');
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}

const saveLocal = async (key, value) => {
  try {

    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}

const getLocal = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error)
    return false;
  }
}

const remove = async (key) => {
  try {
    const value = await AsyncStorage.removeItem(key);
    return value;
  } catch (error) {
    console.log(error)
    return false;
  }
}

export default {
  save,
  get,
  reset,
  saveLocal,
  getLocal,
  remove
}
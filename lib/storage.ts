import * as SecureStore from 'expo-secure-store';

export const setItem = async <T>(key: string, value: T) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

export const removeItem = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

export const getItem = async (key: string) => {
  const value = await SecureStore.getItemAsync(key);
  return value && JSON.parse(value);
};

export { SecureStore as storage };

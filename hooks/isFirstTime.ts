import { useEffect, useState } from 'react';
import { getItem, setItem } from '~/lib/storage';

const IS_FIRST_TIME = 'IS_FIRST_TIME';

export const useIsFirstTime = () => {
  const [isFirstTime, setFirstTime] = useState<boolean | null>(null);

  const fetchValue = async () => {
    const data = await getItem(IS_FIRST_TIME);
    setFirstTime(data == null ? true : data);
  };

  useEffect(() => {
    fetchValue();
  }, []);

  const setIsFirstTime = async () => {
    await setItem(IS_FIRST_TIME, false);
  };
  return { isFirstTime, setIsFirstTime };
};

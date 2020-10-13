import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';

import { countState } from '../atoms/Count';
import { addCountState } from '../selectors/Count';

const Count = () => {
  const [count, setCount] = useRecoilState(addCountState);

  return (
    <View>
      <Button title='+' onPress={() => setCount((c: number) => c + 1)} />
      <Text>Count : { count }</Text>

    </View>
  );
};

export default Count;

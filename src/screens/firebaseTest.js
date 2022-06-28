import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {Text, View} from 'react-native';

const FirebaseTest = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const newReference = database().ref(
      '/Accounts/6255d1ed-4dc0-4351-a66b-29ae40b4811a/hello',
    );
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name}</Text>
    </View>
  );
};

export default FirebaseTest;

import {UpdateData} from '../../../Services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../../RootNavigation';

function* rate(data) {
  try {
    const {lesson_name, rate} = data.payload;
    const uid = yield AsyncStorage.getItem('uid');
    const body = {
      ref: `Users/${uid}/lessons/${lesson_name}/`,
      data: {
        completed: true,
        rate,
      },
      cb: () => {
        RootNavigation.navigate('NavAllScreens');
      },
    };
    yield UpdateData(body);
  } catch (e) {
    console.log(e.toString(), 'RATE LESSON');
  }
}

export {rate};

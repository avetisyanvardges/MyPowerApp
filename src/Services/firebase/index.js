import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signInWithEmailAndPassword = (email, password, cb) => {
  console.log(email);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      AsyncStorage.setItem('uid', res.user.uid);
      cb();
    })
    .catch(e => console.log(e, 'error'));
};

export const SetData = body => {
  const {collection, id, data, cb} = body;
  database().ref(`/${collection}/${id}`).set(data).then(cb);
};

export const UpdateData = body => {
  const {ref, data, cb} = body;
  database().ref(ref).update(data).then(cb);
};

export const UploadFile = async body => {
  const {lesson_name, file_type, file_format, file_name, file_path, cb} = body;
  const uid = await AsyncStorage.getItem('uid');
  const reference = storage().ref(
    `Files/${uid}/${lesson_name}/${file_type}/${file_name}.${file_format}`,
  );
  await reference.putFile(file_path);
  await reference.getDownloadURL().then(res => {
    const updateData = {
      ref: `Users/${uid}/lessons/${lesson_name}/${file_type}/${file_name}`,
      data: {
        url: res,
      },
      cb,
    };
    UpdateData(updateData);
  });
};

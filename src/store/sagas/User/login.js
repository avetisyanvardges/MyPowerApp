import {signInWithEmailAndPassword} from '../../../Services/firebase';

function* login(data) {
  try {
    const {email, password, cb} = data.payload;
    yield signInWithEmailAndPassword(email, password, cb);
  } catch (e) {
    console.log(e.toString(), 'getMessageList99999');
  }
}

export {login};

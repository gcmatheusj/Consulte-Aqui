import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
}

const firebaseConfig = {
    apiKey: "AIzaSyC7K4Thh7Cv-wx4--kU4J1z8yxW5EH4Eyc",
    authDomain: "consulte-aqui.firebaseapp.com",
    databaseURL: "https://consulte-aqui.firebaseio.com",
    projectId: "consulte-aqui",
    storageBucket: "consulte-aqui.appspot.com",
  }
  
  firebase.initializeApp(firebaseConfig)

  export const database = firebase.database()

  


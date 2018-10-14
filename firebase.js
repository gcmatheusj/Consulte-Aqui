import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC7K4Thh7Cv-wx4--kU4J1z8yxW5EH4Eyc",
    authDomain: "consulte-aqui.firebaseapp.com",
    databaseURL: "https://consulte-aqui.firebaseio.com",
    projectId: "consulte-aqui",
    storageBucket: "consulte-aqui.appspot.com",
  }
  
  firebase.initializeApp(firebaseConfig)

  export const database = firebase.database()
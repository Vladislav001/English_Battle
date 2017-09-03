var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyCWK2TC514lkMSDRZrdSs5VNVaGBmELKeA",
  authDomain: "english-battle-58740.firebaseapp.com",
  databaseURL: "https://english-battle-58740.firebaseio.com",
  projectId: "english-battle-58740",
  storageBucket: "english-battle-58740.appspot.com",
  messagingSenderId: "537894884853"
};
var configFirebase = firebase.initializeApp(config);
//module.exports.configFirebase = configFirebase.database(); //this doesnt have to be database only
module.exports.configFirebase = configFirebase; // 2.07.17

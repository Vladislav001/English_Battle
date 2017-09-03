var firebase = require('firebase');

exports.post = function(req, res, next) {

  var nameTest = req.body.nameTest;
  var countQuestion = req.body.countQuestion;
  var lvlTest = req.body.lvlTest;
  var timeForAnswer = req.body.timeForAnswer;

  firebase.auth().onAuthStateChanged(user => {
   if (user) {

  // var refTopic = firebase.database().ref("topics/" + req.params.idTag);
   var refNewTest = firebase.database().ref("topics/" + req.params.idTag + "/" + nameTest);

     var refNewTest = refNewTest.set({
     count_question: countQuestion,
     lvl_test: lvlTest,
     time_for_answer: timeForAnswer
     });
    }
  });

  console.log(refNewTest + " refNewTest");

//Для обновления страницы - костыль
//res.redirect("/personalArea");
};

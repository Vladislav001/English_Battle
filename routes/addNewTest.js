var firebase = require('firebase');

exports.post = function(req, res, next) {

  var nameTest = req.body.nameTest;
  var countQuestion = req.body.countQuestion;
  var countAnswers = req.body.countAnswers;
  var lvlTest = req.body.lvlTest;
  var timeForAnswer = req.body.timeForAnswer;

  firebase.auth().onAuthStateChanged(user => {
   if (user) {

   var refTopic = firebase.database().ref("topics/" + req.params.idTag);

   //Генерируем уникальный ключ
   var unicIdTest =  firebase.app().database().ref().push().getKey();
   var refNewTest = refTopic.child(unicIdTest);

     var refNewTest = refNewTest.set({
     name_test: nameTest,
     count_question: countQuestion,
     count_answers_for_question: countAnswers,
     lvl_test: lvlTest,
     time_for_answer: timeForAnswer
     });
    }


  });

//Для обновления страницы - костыль wtf
//res.redirect("/topic_settings/" + req.params.idTag);
res.redirect("/personalArea");
};

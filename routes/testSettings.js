// Модуль настройки теста
var firebase = require('firebase');

exports.get = function(req, res) {


  firebase.auth().onAuthStateChanged(user => {
   if (user) {

     // ВНИМАНИЕ!!!
    var refTest = firebase.database().ref("topics/" + "-KtDYltAs6p2DUgnqHWM/" + req.params.idTag);

     refTest.once("value")
      .then(function(snapshot) {
        var countQuestion = snapshot.child('count_question').val();
        var countAnswersForQuestion = snapshot.child('count_answers_for_question').val();

           res.render("testSettings", {
             id: snapshot.key,

             countQuestion: countQuestion,
             countAnswersForQuestion: countAnswersForQuestion

           });   console.log(snapshot.key + " id");
            console.log(countAnswersForQuestion + " countAnswersForQuestion");
     });
   }
  });
};

// Модуль настройки топика
var firebase = require('firebase');

exports.post = function(req, res, next) {

  var nameTest = req.body.nameTest;

  firebase.auth().onAuthStateChanged(user => {
   if (user) {
    // var refStudents = firebase.database().ref("students/" + req.params.idTag);
    //
    //  var refStudents = refStudents.update({
    //    login: updateLoginStudent,
    //    password: updatePasswordStudent,
    //    name: updateNameStudent,
    //    age: updateAgeStudent,
    //    gender: updateGenderStudent,
    //    current_test: updateCurrentTest,
    //    current_result_web: updateCurrentResult
    //  });

    }
  });

//Для обновления страницы - костыль
res.redirect("/personalArea");
};



exports.get = function(req, res) {


  firebase.auth().onAuthStateChanged(user => {
   if (user) {

    var refTopic = firebase.database().ref("topics/" + req.params.idTag);

     refTopic.once("value")
      .then(function(snapshot) {
        var nameTopic = snapshot.child('name_topic').val();

       //var link = "/" + currentTest + "/test_settings/id" + req.params.idTag;

      //  var refNumbersResults = refStudents.child("/student_state");
      //  var refResultStudents = refStudents.child("tests/" + currentTest + "/results/" + currentResult);
      //  var refCurrentQuestion = refStudents.child("/student_state");


           res.render("topicSettings", {

           });



     });
    }
  });
};

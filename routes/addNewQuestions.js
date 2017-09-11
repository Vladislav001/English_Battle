var firebase = require('firebase');

exports.post = function(req, res, next) {

  var nameQuestion = req.body.nameQuestion;

  firebase.auth().onAuthStateChanged(user => {
   if (user) {

   var refQuestion = firebase.database().ref("topics/" + "-KtDYltAs6p2DUgnqHWM/" + req.params.idTag + "/questions" );


    // Кривовато
     var refQuestion = refQuestion.update({
     name_question: nameQuestion
     });
    }

    console.log(refQuestion + " refQuestion");
  });

//Для обновления страницы - костыль wtf
//res.redirect("/topic_settings/" + req.params.idTag);
res.redirect("/personalArea");
};

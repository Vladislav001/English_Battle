// Модуль настройки топика
var firebase = require('firebase');

exports.get = function(req, res) {

  var tests = [];  // массив в котором будут храниться тесты (ссылки)
  var nameTest = []; // хранит имена топиков

  firebase.auth().onAuthStateChanged(user => {
   if (user) {

    var refTopic = firebase.database().ref("topics/" + req.params.idTag);

     refTopic.once("value")
      .then(function(snapshot) {
        var nameTopic = snapshot.child('name_topic').val();

        refTopic.orderByChild("name_test").on("child_added", function(snapshotLinks) {

              tests.push("/test_settings/id" + snapshotLinks.key);
              nameTest.push(snapshotLinks.child('name_test').val());
            });

           res.render("topicSettings", {
             id: snapshot.key,
             nameTopic: nameTopic,

             tests: tests,
             nameTest: nameTest

           });console.log(snapshot.key + " id");
     });
    }
  });
};

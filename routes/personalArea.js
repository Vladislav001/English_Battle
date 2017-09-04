// Модуль личного кабинета
var firebase = require('firebase'); //https://metanit.com/web/nodejs/4.10.php


exports.get = function(req, res) {

  var topics = [];  // массив в котором будут храниться топики (ссылки)
  var nameTopic = []; // хранит имена топиков

  var unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (user) {

      var ref = firebase.app().database().ref();

      ref.once("value")
        .then(function(snapshot) {
          var refTopics = firebase.database().ref("topics");
          refTopics.orderByChild("topics/").on("child_added", function(snapshot) {
                  //console.log(snapshot.key);
                topics.push("/topic_settings/id" + snapshot.key);
                nameTopic.push(snapshot.child('name_topic').val());
              });

                unsubscribe(); // убирает состояние
                res.render("personalArea", {

                    topics: topics,
                    nameTopic: nameTopic
                });

        });
    }

  });

};

// Модуль добавление нового теста
var HttpError = require('../error').HttpError;
var AuthError = require('../models/user').AuthError;
var firebase = require('firebase');


exports.post = function(req, res, next) {
  // Получаем данные, которые передал посетитель
    var nameTopic = req.body.nameTopic;
    var nameConcretTopic = req.body.nameConcretTopic;
    var nameTest = req.body.nameTest;

    var topicFirst;

    // Проверим имеется ли такой тест в БД
    var refCheckTopic = firebase.database().ref("topics");
    refCheckTopic.orderByChild("name_topic").equalTo(nameTopic).limitToFirst(1).on("child_added", function(snapshot) {
    topicFirst = snapshot.child("topic").val();
    });

  if (nameTopic != topicFirst) {
  //Генерируем уникальный ключ
  var userIdTopic =  firebase.app().database().ref().push().getKey();

  var ref = firebase.app().database().ref();

  var refNewTopic = ref.child('topics/' + userIdTopic);
  var refNewTopic = refNewTopic.set({
  name_topic: nameTopic
  });


// Без этого не обновляет страницу
res.redirect("/personalArea");
} else {
    return next(new HttpError(403, "This test already exists")); //403 - отказ регистрации
  }
};

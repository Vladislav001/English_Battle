var checkAuth = require('../middleware/checkAuth');

module.exports = function(app) {
  // Каждый 'get' подключает соотсветсвующий модуль и вызывает его метод 'get'
  app.get('/', require('./login').get);
  app.post('/login', require('./login').post); // при poste на login, подключаем post этого модуля()
  app.post('/logout', require('./logout').post);
  app.get('/personalArea', require('./personalArea').get);
  app.post('/addNewTopic', require('./addNewTopic').post);
  app.post('/addNewTest/id:idTag', require('./addNewTest').post);

  app.get('/topic_settings/id:idTag', require('./topicSettings').get);

  //app.get('/test_settings/id:idTag', require('./testSettings').get);

};

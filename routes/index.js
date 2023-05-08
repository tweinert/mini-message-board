var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  let user = req.body.messageUser;
  let text = req.body.messageText;

  messages.push({text: text, user: user, added: new Date()});
  res.redirect('/');
});

module.exports = router;

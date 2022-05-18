var express = require('express');
var router = express.Router();
var sender = require('../modules/mailModule');

router.post('/send', sender.sender);
router.delete('/delete/:id', sender.deletemail);
router.get('/getmail', sender.getmail);

module.exports = router;
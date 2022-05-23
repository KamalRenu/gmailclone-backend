var express = require('express');
var router = express.Router();
const isAuthorized = require('../modules/authorizeModule');l
var sender = require('../modules/mailModule');

router.post('/send', isAuthorized, sender.sender);
router.delete('/delete/:id', isAuthorized, sender.deletemail);
router.get('/getmail', isAuthorized, sender.getmail);

module.exports = router;
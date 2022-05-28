var express = require('express');
var router = express.Router();
const auth = require('../modules/authorizeModule');
var sender = require('../modules/mailModule');

router.post('/send', auth.isAuthorized, sender.sender);
router.delete('/delete/:id', auth.isAuthorized, sender.deletemail);
router.get('/getmail', auth.isAuthorized, sender.getmail);

module.exports = router;
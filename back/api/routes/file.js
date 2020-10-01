const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const getHandler = require('../handlers/get');
const postHandler = require('../handlers/post');

router.get('/', getHandler);
router.post('/', upload.array('file'), postHandler);

module.exports = router;

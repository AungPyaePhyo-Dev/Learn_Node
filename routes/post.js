const router = require('express').Router();

const controller = require('../controllers/post');

router.get('/', controller.all);

router.post('/', controller.add);

router.get('/:id', controller.get);

router.patch('/:id', controller.update);

router.delete('/:id', controller.drop);

module.exports = router;


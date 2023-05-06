const router = require('express').Router();

const controller = require('../controllers/user');

router.get('/', controller.all);
router.post('/', controller.post);

router.route('/:id')
    .get(controller.get)
    .patch(controller.patch)
    .delete(controller.drop)

// router.get('/', (req,res)=>{
//     res.json({ msg : 'All Users'});
// })

// router.post('/', (req,res)=>{
//     res.json(req.body);
// })

// router.route('/:id')
//     .get((req,res) => res.json({ msg : 'Get User Id is ' + req.params.id}))
//     .patch((req,res) => res.json({ msg : 'Edit User ID is' + req.params.id}))
//     .delete((req,res) => res.json({ msg : 'Delete User ID is ' + req.params.id}))

module.exports = router;   
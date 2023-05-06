
const all = async (req,res,next) => {
    res.json({ msg : 'All Posts' });
}
const get = async (req,res,next) => {
    res.json({ msg : 'Single Post' + req.params.id });
}

const add = async (req,res,next) => {
    res.json({ msg : "Add New Post", result : req.body });
}

const update = async (req,res,next) => {
    res.json({ msg : "Update Post" + req.params.id});
}

const drop = async(req,res,next) => {
    res.json({ msg : "Delete Post" + req.params.id})
}

module.exports = {
    all,
    get,
    add,
    update,
    drop
}
const DB = require('../dbs/user');
const Helper = require('../utils/helper')

const all = async (req,res,next) => {
    let users = await DB.find();
    Helper.fMsg(res,'All Users', users);
}


const get = async (req,res,next) => {
    let id = req.params.id;
    let user =  await DB.findById(id);
    Helper.fMsg(res, 'Single User', user);
}

const post = async (req,res,next) => {
    let saveUser = new DB(req.body);
    let result = await saveUser.save();

    Helper.fMsg(res,'Added User', result);
}

const patch = async (req,res,next) => {
    let user = await DB.findById(req.params.id);
    if(user) {
        await DB.findByIdAndUpdate(user._id, req.body);
        let returnUser = await DB.findById(user._id);
        Helper.fMsg(res, 'Updated User', returnUser);
    }
    else {
        next(new Error("Error, No user id with that name!"));
    }
}

const drop = async (req,res,next) => {
    await DB.findByIdAndDelete(req.params.id);
    Helper.fMsg(res, 'Deleted User');
}

module.exports = {
    all,
    get,
    post,
    patch,
    drop
}
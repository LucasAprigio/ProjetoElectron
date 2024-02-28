const User = require('../models/user');

async function getUsers(){
    return User.find({}, { __v: 0 });
}

async function postUser(name, email, password){
    const user = new User({ name, email, password });
    await user.save();
    return user;
}

async function putUser(id, name, email, password){
    const user = await User.findById(id);
    if(!user){
        return null;
    }

    user.name = name;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
}

async function deleteUser(id){
    return User.findByIdAndDelete(id);
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}
const userService = require('../services/userService');

async function getUsers(req,res){
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

async function postUser(req,res){
    try {
        const { name, email, password } = req.body;
        const user = await  userService.postUser(name, email, password);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
}

async function putUser(req,res){
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const user = await userService.putUser(id, name, email, password);
        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
}

async function deleteUser(req,res){
    try {
        const { id } = req.params
        const user = await userService.deleteUser(id);
        if(!user){
            res.status(404).json({ error: 'User not found' })
        }

        res.json({ message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}
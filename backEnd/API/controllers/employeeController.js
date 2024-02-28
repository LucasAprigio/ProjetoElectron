const employeeService = require('../services/employeeService');

async function getEmployees(req,res){
    try {
        const employees = await employeeService.getEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
}

async function postEmployee(req,res){
    try {
        const { cpf, name, office, salary } = req.body;
        const employee = await  employeeService.postEmployee(cpf, name, office,salary);
        res.status(201).json({ message: 'Employee created successfully', employee });
    }catch(error){
        res.status(500).json({ error: 'Failed to create employee' });
    }
}

async function putEmployee(req,res){
    try{
        const { id } = req.params;
        const { cpf, name, office, salary } = req.body;
        const employee = await employeeService.putEmployee( id, cpf, name, office, salary);
        if(!employee){
            return res.status(404).json({ error: 'Employee not found'})
        }
        
        res.json({message: 'Employee updated successfully', employee});     
    } catch (error){
        res.status(500).json({error: 'Faled to update user' })
    }
}

async function deleteEmployee(req,res){
    try {
        const { id } = req.params
        const employee = await employeeService.deleteEmployee(id);
        if(!employee){
            res.status(404).json({ error: 'Employee not found' })
        }

        res.json({ message: 'Employee deleted successfully', employee });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete Employee' });
    }
}

module.exports = {
    getEmployees,
    postEmployee,
    putEmployee,
    deleteEmployee
}
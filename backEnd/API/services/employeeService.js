const Employee = require('../models/employee');

async function getEmployees(){
    return Employee.find({}, { __v: 0 });
}

async function postEmployee(cpf, name, office, salary){
    const employee = new Employee({cpf,name, office, salary});
    await employee.save()
    return employee;
}

async function putEmployee(cpf, name, office, salary){
    const employee = await Employee.findById(id);
    if(!employee){
        return null;
    }

    employee.cpf = cpf;
    employee.name = name;
    employee.office = office;
    employee.salary = salary;
        await employee.save();
        return employee;
}

async function deleteEmployee(id){
    return Employee.findeByIdAndDelete(id);
}

module.exports = {
    getEmployees,
    postEmployee,
    putEmployee,
    deleteEmployee
}
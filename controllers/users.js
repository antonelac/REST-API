import { v4 as uuidv4 } from 'uuid';


let users = [];

export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
   const user= req.body;
   users.push({ ...user, id: uuidv4()});
   res.send(`User with the name ${user.firstName} added to the database`);
}

export const findUser = (req, res) => {
    const { id } = req.params;
    const foundUsers = users.find((user) => user.id === id);
    res.send(req.params);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const userToBeUpdated = users.find((user) => user.id === id);

    if(firstName) users.firstName = firstName;
    if(lastName) users.lastName = lastName;
    if(age) users.age = age;

    res.send(`User with the ${id} has been updated`);
}
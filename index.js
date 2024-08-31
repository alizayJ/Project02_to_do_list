#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'Make to do list',
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more??',
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
// delete block,
let del = await inquirer.prompt([
    {
        name: 'delete',
        type: 'confirm',
        message: 'Do you want to delete last one in the list??',
        default: "false"
    }
]);
let cond = del.delete;
while (cond) {
    todos.pop();
    console.log(todos);
    cond = false;
}

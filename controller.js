"use strict";

function TodoController() {
    const vm = this;
    vm.tasks = [
        {
            task: "cut the grass",
            completed: false
        }, 
        {
            task: "clean out car",
            completed: false
        },
        {
            task: "grocery shopping",
            completed: true
        },
        {
            task: "play Rainbow6",
            completed: false
        },
        {
            task: "apply for jobs",
            completed: true
        },
        {
            task: "attend a meet-up",
            completed: false
        }
        
    ];
    vm.deleteTask = function(index) {
        console.log('clicked');
        vm.tasks.splice(index, 1);
    };
    vm.addTask = (task, completed) => {
        vm.tasks.push({
            task: vm.tasks.task,
            completed: false
        });
        vm.tasks.task = "";
    };
    vm.completeTask = (index) => {
        vm.tasks[index].completed = true;
    };
    vm.editItem = (index, item) => {
        vm.showForm = true;
        vm.tempItem = {
            task: vm.tasks.task,
            completed: false
        };
        vm.tempIndex = index;
    };
    vm.updateItem = (index, item) => {
        vm.tasks.splice(index, 1, item);
        vm.showForm = false;
    };
    
}

angular
    .module("TodoApp", [])
    .controller("TodoController", TodoController);
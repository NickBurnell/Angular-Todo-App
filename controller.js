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
    }
}

angular
    .module("TodoApp", [])
    .controller("TodoController", TodoController);
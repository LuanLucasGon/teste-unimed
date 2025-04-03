package com.example.unimed_back.controllers;

import com.example.unimed_back.domain.Task;
import com.example.unimed_back.dto.TaskDTO;
import com.example.unimed_back.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createNewTask(@RequestBody TaskDTO user){
        Task newTask = this.taskService.createTask(user);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks(){
        List<Task> allTasks = this.taskService.getAllTasks();
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }
}

package com.example.unimed_back.services;

import com.example.unimed_back.domain.Task;
import com.example.unimed_back.domain.repositories.TaskRepository;
import com.example.unimed_back.dto.TaskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(TaskDTO taskDTO){
        Task task = new Task(taskDTO);
        this.taskRepository.save(task);
        return task;
    }

    public List<Task> getAllTasks(){
        return this.taskRepository.findAll();
    }
}

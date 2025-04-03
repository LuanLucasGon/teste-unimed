package com.example.unimed_back.domain;

import com.example.unimed_back.dto.TaskDTO;
import jakarta.persistence.*;

@Entity(name = "tasks")
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String status;
    private String title;

    public Task() {
    }

    public Task(String status, String title) {
        this.status = status;
        this.title = title;
    }

    public Task(TaskDTO taskDTO){
        this.status = taskDTO.status();
        this.title = taskDTO.title();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

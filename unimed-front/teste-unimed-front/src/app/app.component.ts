import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from './services/task-service.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

interface Task {
  title: string;
  status: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks$: Observable<Task[]>;

  constructor(private router: Router, private taskService: TaskServiceService) {
    this.tasks$ = this.taskService.read(); 
  }

  goToCreateTask(): void {
    const taskTitle = prompt("Digite o nome da nova task:");
    const taskStatus = prompt("Digite o status da nova task (pendente, em andamento, concluída):");
    
    if (taskTitle && taskStatus) {
      this.taskService.create(taskTitle, taskStatus).subscribe(() => {
        this.tasks$ = this.taskService.read(); // Atualiza a lista após criar uma nova task
      });
    }
  }

  goToReadTask(): void {
    this.taskService.read().subscribe(tasks => {
      if (tasks.length === 0) {
        alert("Nenhuma task cadastrada!");
      } else {
        alert("Tasks:\n" + tasks.map((task: { title: any; status: any; }) => `${task.title} - ${task.status}`).join("\n"));
      }
    });
  }
}

import { Routes } from '@angular/router';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ReadTaskComponent } from './pages/read-task/read-task.component';

export const routes: Routes = [
    { path: 'create-task', component: CreateTaskComponent },
    { path: 'read-task', component: ReadTaskComponent },
];

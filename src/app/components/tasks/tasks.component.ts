import { Component, OnInit } from '@angular/core';
import { Task } from '../../Tasks';
import { TASKS } from 'src/app/test-tasks';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  onDelete(tasks: any) {
    this.taskService.deleteTask(tasks).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== tasks.id);
    });
  }

  onToggle(tasks: any) {
    tasks.reminder = !tasks.reminder;
    return this.taskService.toggleTask(tasks).subscribe();
  }
}

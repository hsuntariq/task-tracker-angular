import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
})
export class AddTasksComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  remind: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('please enter a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.remind,
    };

    // emit an event

    this.addTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.remind = false;
  }
}

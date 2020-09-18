import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo: Todo = new Todo(); //khởi tạo đối tượng 
  todos : Todo[] = [];
  constructor(private todoService : TodoService) { }

  getAll(){
    this.todos =  this.todoService.getAll();
  }
  createTodo(){
    this.todoService.createTodo(this.newTodo);
    this.newTodo = new Todo();//khởi tạo đối tượng mới để kiểm tra id đã tồn tại chưa.
    this.getAll();
  }

  completeTodo(todo){
    this.todoService.completeTodo(todo);
    this.getAll();
  }
  deleteTodo(todo){
    this.todoService.deleteTodo(todo.id);
    this.getAll();
  }
  ngOnInit(): void {

    this.getAll();
  }

}

import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lastId:number = 0;
  todos: Todo[] = [];
  constructor() { }
  getAll(){
    return this.todos;
  }
  getOne(id:number): Todo {
      return this.todos.filter(todo => todo.id = id).pop();
  }
  createTodo(todo:Todo):TodoService{
      if(!todo.id)//kiểm tra id trùng lặp hay không!
      {
        todo.id = ++this.lastId;
      }
      this.todos.push(todo); //thêm mới một đối tượng vào mảng đối tượng
      console.log(this.todos);
      return this;
  }
  updateTodo(id:number, value:Object = {}):Todo{
    let todo = this.getOne(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,value);
    return todo;
  }
  deleteTodo(id:number):TodoService{
    this.todos = this.todos.filter(todo => todo.id !== id);//Tìm ra id khác id vừa chọn để trả về
    return this;
  }
  completeTodo(todo:Todo){
    let updateTodo = this.updateTodo(todo.id,{complete: !todo.complete});
    return updateTodo;
  }
}

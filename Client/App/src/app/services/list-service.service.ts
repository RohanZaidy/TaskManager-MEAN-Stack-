import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  
  baseUrl = 'http://localhost:8000';
  constructor(private http:HttpClient) { }

  getList()
  {
    return this.http.get('http://localhost:8000/lists');
  }

  addList(list: { name: string }) {
    return this.http.post(this.baseUrl + '/lists/add-list', list);
  }

  GetTasks(listId: any)
  {
    return this.http.get(this.baseUrl + '/tasks/'+listId);
  }

  AddTask(task: { title: string, listId: string }) {
    return this.http.post(this.baseUrl + '/tasks/add-task', task);
  }

  UpdateList(list : {name:string, id:string})
  {
    return this.http.put(this.baseUrl + '/lists/update-list', list);
  }

  deleteList(listid:any)
  {
    return this.http.delete(this.baseUrl+ '/lists/delete-list/'+listid);
  }

  deleteTask(taskid:any)
  {
    return this.http.delete(this.baseUrl+ '/tasks/delete-task/'+taskid);
  }
}

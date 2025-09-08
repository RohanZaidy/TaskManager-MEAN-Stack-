import { Component } from '@angular/core';
import { ListServiceService } from '../services/list-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NgFor,FormsModule,CommonModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
}) 
export class HomeComponent{
    lists: any[] = [];
    newListName: string = '';
    newTask: string = '';
    updatedlistName: string = '';
    selectedListBoolean: boolean = false;

    constructor(private ListService:ListServiceService) { }

    ngOnInit(): void {
    this.getList();
    }

    getList()
    {
      this.ListService.getList().subscribe((data)=>{
        this.lists = data as any[];
      });
    }

    addList() {
    if (!this.newListName.trim()) return;

    this.ListService.addList({ name: this.newListName }).subscribe(() => {
      this.getList();
      this.newListName = ''; 
    });
  }

  selectedList: any = null;
  selectedlistId: any;
  Tasks: any[] = [];
  selectList(list: any)
   {
     this.selectedList = list.name;
     this.selectedlistId = list._id;
     this.selectedListBoolean = true;
     this.ListService.GetTasks(list._id).subscribe((data)=>{
      this.Tasks = data as any[];
       })
   }

   AddTask()
   {
       this.ListService.AddTask({title: this.newTask, listId: this.selectedlistId}).subscribe(()=>{
       this.ListService.GetTasks(this.selectedlistId).subscribe((data)=>{
       this.Tasks = data as any[];
       });    
   })
  }

  UpdateList()
  {
    console.log(this.updatedlistName, this.selectedlistId);
    this.ListService.UpdateList({name:this.updatedlistName, id:this.selectedlistId}).subscribe(()=>{
      this.getList();
      this.selectedList = this.updatedlistName;
      this.updatedlistName = '';
    });
  }
  
  deletelistId: any;
  deleteList(list: any)
  {
       let confirmed = confirm("Are you sure you want to delete this list and all its tasks?");
       
       if(!confirmed) return;
       this.deletelistId = list._id;
       this.ListService.deleteList(this.deletelistId).subscribe(()=>{
       this.getList();
       this.selectedListBoolean = false;
       this.selectedList = null;
       this.Tasks = [];
       });
  }
  
  deleteTaskId: any;
  deleteTask(tasks: any)
   {
      this.deleteTaskId = tasks._id;
      this.ListService.deleteTask(this.deleteTaskId).subscribe(()=>{
      this.ListService.GetTasks(this.selectedlistId).subscribe((data)=>{
      this.Tasks = data as any[];
      })});
   }
}
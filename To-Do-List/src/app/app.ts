import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('To-Do-List');
  task ="prachi";
  taskList : {id : number,task:string}[]=[]
  editId : number | null = null;

  addTask(){
    if(this.task.trim() === "")return;
    if(this.editId != null){
      const index = this.taskList.findIndex(
        x => x.id == this.editId
      );
      this.taskList[index].task = this.task;
      this.editId = null;

    }else{
    this.taskList.push({id :Date.now(), task: this.task});
    console.log(this.taskList);
    }
    this.task = "";

  }
  deleteTask(taskID : number){
 this.taskList= this.taskList.filter((item)=>item.id!=taskID);

  }
  editTask(item: any){
    this.task = item.task;
    this.editId = item.id;
  }
}

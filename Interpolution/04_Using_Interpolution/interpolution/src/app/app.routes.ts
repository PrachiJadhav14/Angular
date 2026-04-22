import { Routes } from '@angular/router';
import { App } from './app';
import { Lifecycle } from './lifecycle/lifecycle';
import { Prachi } from './prachi/prachi';
import { Student } from './student/student';


export const routes: Routes = [
  {path :'',component: App},
  {path :'lifecycle',component :Lifecycle},
   {path :'prachi',component: Prachi},
   {path : 'student', component: Student}

];

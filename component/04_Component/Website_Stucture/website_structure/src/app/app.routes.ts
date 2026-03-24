import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { App } from './app';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';

export const routes: Routes = [
  {path :'', component: App},
  {path : 'home', component : Home },
  {path: 'about', component : About},
  {path : 'contact', component : Contact}

];

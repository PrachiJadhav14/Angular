import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {path : '', component : Home},
  {path : 'home' , component : Home},
  {path : 'about',component :About },
  {path : 'contact/:id',component : Contact},
  // {path : '**', component : NotFound},
   {path : 'user',loadComponent : () => import('./user/user').then(m=>m.User)},            ////lzay loading
];

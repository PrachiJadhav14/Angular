import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MasterModule } from './master/master-module';
import { PrachiList } from './prachi-list/prachi-list';
import { MasterList } from './master-list/master-list';



@NgModule({
  declarations: [
    App,
    MasterList,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

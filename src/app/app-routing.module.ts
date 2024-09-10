import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot([])],

  exports: [RouterModule]
  
})

export class AppRoutingModule {
 }

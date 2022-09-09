import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlackComponent } from './black/black.component';

const routes = [
  { path: 'blue', component: BlueComponent },
  { path: 'red', component: RedComponent },
  { path: 'black', component: BlackComponent }
];
@NgModule({
  imports:  [
     BrowserModule,
     RouterModule.forRoot(routes),
      BrowserAnimationsModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

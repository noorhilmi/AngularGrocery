import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppGroceryComponent } from './app-grocery/app-grocery.component';


@NgModule({
  declarations: [
    AppGroceryComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppGroceryComponent]
})
export class AppModule { }

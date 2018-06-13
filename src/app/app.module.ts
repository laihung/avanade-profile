import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Services } from './services/services';

import { AppComponent } from './app.component';
import { AvanadeButtonComponent } from './components/avanade-button/avanade-button.component';
import { AvanadeCardComponent } from './components/avanade-card/avanade-card.component';
import { AvanadeInputComponent } from './components/avanade-input/avanade-input.component';
import { AvanadeLoaderComponent } from './components/avanade-loader/avanade-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AvanadeButtonComponent,
    AvanadeCardComponent,
    AvanadeInputComponent,    
    AvanadeLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

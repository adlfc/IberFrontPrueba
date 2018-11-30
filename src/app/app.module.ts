import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { FormAppComponent } from './form-app/form-app.component';
import { TableAppComponent } from './table-app/table-app.component';
import { TemplateAppComponent } from './template-app/template-app.component';
import { NavAppComponent } from './nav-app/nav-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    TableAppComponent,
    TemplateAppComponent,
    NavAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

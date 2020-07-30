import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorTestComponent } from './editor-test/editor-test.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditorTestComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

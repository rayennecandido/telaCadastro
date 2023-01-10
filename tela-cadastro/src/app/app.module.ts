import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask, } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent,]
})
export class AppModule { }

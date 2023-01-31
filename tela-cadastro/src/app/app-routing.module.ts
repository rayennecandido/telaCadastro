import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './clientes/formulario/formulario.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: 'cadastrocliente', component: FormularioComponent
    },
    
])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
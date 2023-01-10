import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit {
  formCliente: FormGroup;

  constructor(){ }

  ngOnInit() {
  this.formCliente = new FormGroup({
    nome: new FormControl(''),
    CPF: new FormControl(''),
    dataNascimento: new FormControl('')
  });
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      CPF: new FormControl(cliente.CPF),
      dataNascimento: new FormControl(cliente.dataNascimento),
    });
  }

  OnSubmit() {
    console.log(this.formCliente.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit {
  formCliente: FormGroup; 
  
  cliente: Cliente = {
    CPF: '',
    dataNascimento: '',
    id: undefined,
    nome: ''
  };

  constructor(private clienteService: ClienteService){ }

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
  
  OnSubmit(): void {
    const data = {
      CPF: this.cliente.CPF,
      dataNascimento: this.cliente.dataNascimento,
      nome: this.cliente.nome,
      id: this.cliente.id
    };

    this.clienteService.save(data).subscribe({
        next: (res) => { console.log(res);        },
        error: (e) => console.error(e)
      });
  };
  Cancelar(): void {
    this.cliente.CPF = '',
    this.cliente.dataNascimento = '',
    this.cliente.nome = '',
    this.cliente.id = ''

  }
  }
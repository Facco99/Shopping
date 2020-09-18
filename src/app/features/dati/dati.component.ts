import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.scss']
})
export class DatiComponent implements OnInit {

  datiForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.datiForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      telefono: ['', Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(10)])],
      citta: ['', Validators.required],
      cap: ['', Validators.required],
      indirizzo: ['',Validators.required],
      numero: ['', Validators.required],
      info: [''],
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Dati } from 'src/app/core/models/dati';
import { saveDati } from 'src/app/redux/dati/dati.actions';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.scss']
})
export class DatiComponent implements OnInit {

  datiForm: FormGroup;
  dati:Dati;

  constructor(private fb:FormBuilder, private store:Store) { }

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

  saveDati(){
    this.dati = this.datiForm.value;
    this.store.dispatch(saveDati({ dati:this.dati }))
  }

}

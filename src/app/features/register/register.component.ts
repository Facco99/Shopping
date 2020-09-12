import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUpUser } from 'src/app/redux/user/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  signup(username:string,email:string,password:string){
    this.store.dispatch(signUpUser({username,password,email}));
  }

}

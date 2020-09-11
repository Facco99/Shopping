import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { selectErrorMessage } from 'src/app/redux/user';
import { login } from 'src/app/redux/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  get error(){
    return this.store.pipe(select(selectErrorMessage));
  }

  login(username:string, mail:string, pass:string){
    let user:User = {"username":username,"email":mail,"password":pass};
    this.store.dispatch(login({user}));
  }

}

import { Checkout } from './checkout';
import { Dati } from './dati';

  
export interface User {
    id?:number;
    username?:string;    
    email:string;
    password:string;
    dati?:Dati;
    checkout?:Checkout;
}
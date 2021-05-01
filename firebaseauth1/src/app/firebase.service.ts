import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import {  Product} from "./product";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public angularfireauth:AngularFireAuth,
    private http:HttpClient
     ) { }
islogin=false;
async signin(email:string,password :string){
  await this.angularfireauth.signInWithEmailAndPassword(email,password).then(res=>{
    this.islogin=true;
    localStorage.setItem("user",JSON.stringify(res.user))
  })
}
async signup(email:string,password :string){
  await this.angularfireauth.createUserWithEmailAndPassword(email,password).then(res=>{
    this.islogin=true;
    localStorage.setItem("user",JSON.stringify(res.user))
  })
}
logout(){
  this.angularfireauth.signOut();
  localStorage.removeItem("user");
}
getproducts():Observable<Product>{
  const URL ="http://localhost:3000/categories";
  return this.http.get<Product>(URL);

}
addproducts(body):Observable<Product>{
  const URL ="http://localhost:3000/products";
  return this.http.post<Product>(URL,body);

}
}

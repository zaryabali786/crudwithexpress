import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Product } from './product';
//import {  FirebaseService} from "../app/firebase.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseauth1';
  categoryList:Product;
  islogin=false;
  constructor(public fireservice:FirebaseService){

  }
  ngOnInit(){
  this.fireservice.getproducts().subscribe(data=>{
    this.categoryList=data;
  })


  if(localStorage.getItem('user')!==null)
this.islogin=true;
else
this.islogin=false;
  }
  async signin(email:string,password:string){
    await this.fireservice.signin(email,password);
    if(this.fireservice.islogin)
    this.islogin=true;
  }
  async signup(email:string,password:string){
    await this.fireservice.signup(email,password);
    if(this.fireservice.islogin)
        this.islogin=true;
  }
  handlelogout(){
    this.islogin=false;
  }
  add(form){
let update={
categoryId:form.value.cars
}

this.fireservice.addproducts(update).subscribe(
  data=>{
    console.log(data);
    alert(data)
  }
)
  }
  
}

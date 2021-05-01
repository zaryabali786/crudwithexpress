import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FirebaseService } from '../firebase.service';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Output() islogout=new EventEmitter<void>();
  constructor(public fireservice:FirebaseService ) { }

  ngOnInit(): void {
  }
logout(){


  this.fireservice.logout();
this.islogout.emit();
}


}

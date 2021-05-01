import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from "@ng-select/ng-select";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './firebase.service';
import { HomeComponent } from './home/home.component';
import  {AngularFireModule} from '@angular/fire';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC88_q70GQYkJfzpjxBVT5iVZxEnytvAmg",
      authDomain: "fir-angular-auth-e261f.firebaseapp.com",
      projectId: "fir-angular-auth-e261f",
      storageBucket: "fir-angular-auth-e261f.appspot.com",
      messagingSenderId: "779534584237",
      appId: "1:779534584237:web:0bacdaf3f53090afaf7924"
    }),
    NgSelectModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

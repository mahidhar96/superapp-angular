import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MicroApp} from '../model/MicroApp'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  icons = ['dining_black','subscriptions_black','flight_black','bus_black','receipt_black','payments_black','delivery_black',];
  submitted = false;
  microapp = new MicroApp("","", "","","");
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  submit(){

    var body =JSON.stringify(this.microapp)
    this.httpClient.post("http://127.0.0.1:7000/microapps/",body,{'headers':this.headers}).subscribe(
      res => {
        alert("Student Saved! "+res);
      },
      err => {
        alert("Error! "+err);
      }
    );
    console.log(body)
    this.microapp = new MicroApp("","", "","","");
  }

  get diagnostic() { return JSON.stringify(this.microapp); }

}

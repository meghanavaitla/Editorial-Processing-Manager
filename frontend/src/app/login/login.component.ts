import { Component, OnInit } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
    
   }
  ngOnInit() {
  }
  

  

   register(){
    var x = document.getElementById("sign-in");
    var y = document.getElementById("sign-up");
    var z = document.getElementById("btn");  

     x.style.left = "-400px";
     y.style.left = "0px";
     z.style.left = "110px";
   }  

   login()
   {
    var x = document.getElementById("sign-in");
    var y = document.getElementById("sign-up");
    var z = document.getElementById("btn");  

    x.style.left = "0px";
    y.style.left = "450px";
    z.style.left = "0px";
   }
 
}

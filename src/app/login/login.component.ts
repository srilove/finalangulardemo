import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  submitted=false;

  submit(main:any){
          
          // console.log(res.errors)

          // console.log(fn.value)
          // console.log(p)
          console.log(main)
       
   }




   
  constructor() { }

  ngOnInit(): void {
   
  }

  



}

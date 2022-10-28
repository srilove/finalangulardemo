import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from  '@angular/forms'; 
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  submitted = false;
  fname: any;

    login =new FormGroup ({

               fname : new FormControl("", [Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')]),
               lname : new FormControl("", [Validators.required,Validators.minLength(8)]),    
               address : new FormControl("",[Validators.required]),
               city : new FormControl("",[Validators.required]),
               state : new FormControl("",[Validators.required]),
               pincode : new FormControl("",[Validators.required]),
               phone : new FormControl("",[Validators.required]),
               email : new FormControl("",[Validators.required,Validators.email]),
               password : new FormControl("",[Validators.required]),
 });

 onSubmit(){
  this.submitted = true;

  if (this.login.invalid) {

    alert("please fill all fileds")
    

}

else  { alert("reg success")}

  
  }

  ngOnInit(): void {
  }

}

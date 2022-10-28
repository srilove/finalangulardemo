import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.movetoabout();
    
  }




  movetoabout() {

    this.router.navigate(['/about'],{queryParams: {part: 'navbar',search: 'contact', year: 2021 }})
  
  
   }


}

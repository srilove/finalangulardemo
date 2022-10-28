import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

   
  
     data:any="paretn to child";

    childdata:any;






  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() cdata:any="";

    
  
  @Output()  eve = new EventEmitter() 


    pdata="child to parent";

    childtoparent(){

      this.eve.emit(this.pdata)
    }
  
      
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data:any;
  cars = [
    {
      id:1,
      color: '1',
      type: 'minivan',
      
      capacity: 3.258,
    },

    {
      id:2,
      color: '2',
      type: 'station wagon',
     
      capacity: 5.321,
    },
    {
      id:3,
      color: '3',
      type: 'station wagon',
    
      capacity: 2.369,
    },
  ];




  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      param => { 
         
           let cid:any = param.get('id');  //string formart    for convert number use + 

           this.data = this.cars.find(cars=> cars.id == Number(cid))
           console.log(this.data)

      }

     )


   
}
  

}

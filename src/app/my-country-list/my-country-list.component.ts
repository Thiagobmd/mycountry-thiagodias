import { Component, OnInit } from '@angular/core';

import { statesService } from '../shared/states.service' ;

@Component({
  selector: 'app-my-country-list',
  templateUrl: './my-country-list.component.html',
  styleUrls: ['./my-country-list.component.scss']
})
export class MyCountryListComponent implements OnInit {

  
  private statesList  = []; 

  constructor(private statesService: statesService){  

    
  }

  ngOnInit() {
    this.statesService.getStates().subscribe((res : any[])=>{
      this.statesList = res;

      console.log(this.statesList);
  });
  }

}

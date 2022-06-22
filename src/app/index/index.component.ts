import { Component, OnInit } from '@angular/core';
import { Index } from '../Index'
import { INDEX } from '../mock-index';
import { JSONPlaceholderService } from '../../app/services/jsonplaceholder.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  indices: Index[] = INDEX;
  data: Array<any>;
  clicked: boolean = false;

  constructor(private JSONPlaceholder:JSONPlaceholderService) { 
    this.data = new Array<any>();
    this.clicked = false;
  }

  ngOnInit(): void {
  }

  getIndex(): Index[]{
    return INDEX;
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data)=>{
      this.data = data;
    })
  }
  showDetails(i:number){
    console.log(i);
  }
}

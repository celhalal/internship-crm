import { Component, OnInit, Input } from '@angular/core';
import { Index } from '../Index'
import { INDEX } from '../mock-index';
import { NgClass } from '@angular/common';
import { JSONPlaceholderService } from '../../app/services/jsonplaceholder.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  indices: Index[] = INDEX;
  data: Array<any>;
  show = false;


  constructor(private JSONPlaceholder:JSONPlaceholderService) { 
    this.data = new Array<any>();
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

  showDetails(data:any){
    console.log(data);
    return data.show = !data.show;
  }
}

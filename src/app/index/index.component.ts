import { Component, OnInit } from '@angular/core';
import { Index } from '../Index'
import { INDEX } from '../mock-index';
import { JSONPlaceholderService } from '../../app/services/jsonplaceholder.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  indices: Index[] = INDEX;
  data: Array<any>;
  showFiller = false;
  allRowsExpanded: boolean = false;
  currentVal =  10;

  searchForm: any;


  constructor(private router:Router, private JSONPlaceholder:JSONPlaceholderService,) { 
    this.data = new Array<any>();
    length = this.data.length;
  }

  ngOnInit() {}


  counter(i:number){
    return new Array(i);
  }

  getIndex(): Index[]{
    return INDEX;
  }

  getDataFromAPI(){
    this.JSONPlaceholder.getData().subscribe((data)=>{
      this.data = data;
    })
  }

  public toggle() {
    this.allRowsExpanded = !this.allRowsExpanded;
  }

  signOut(){
    this.router.navigate([''])
  }
}

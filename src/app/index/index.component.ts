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
  searchText = "";

  currentVal =  5;
  p: number = 1;
  total: number = 0;

  status = 'Enable'; 
  opened = true;
  showFiller = true;
  allRowsExpanded: boolean = false;

  constructor(private router:Router, private JSONPlaceholder:JSONPlaceholderService,) { 
    this.data = new Array<any>();
    length = this.data.length;
  }

  ngOnInit() {
    this.getData();
  }

  counter(i:number){
    return new Array(i);
  }

  getIndex(): Index[]{
    return INDEX;
  }

  getData(){
    this.JSONPlaceholder.getData(this.p).subscribe((data)=>{
      this.data = data;
      this.total = data.length;
    })
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getData();
}

  public toggle() {
    this.allRowsExpanded = !this.allRowsExpanded;
  }

  toggleSidebar(){
    this.opened = !this.opened;
    this.status = this.opened ? 'Enable' : 'Disable';
  }

  signOut(){
    this.router.navigate([''])
  }
}

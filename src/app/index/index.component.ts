import { Component, OnInit, Input } from '@angular/core';
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
  show = false;
  length?: number;
  panelOpenState = false;


  constructor(private router:Router, private JSONPlaceholder:JSONPlaceholderService) { 
    this.data = new Array<any>();
    length = this.data.length;
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

  signOut(){
    this.router.navigate([''])
  }
}

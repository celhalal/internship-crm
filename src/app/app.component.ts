import { Component } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private JSONPlaceholder:JSONPlaceholderService) { 
    this.data = new Array<any>();
  }

  data:Array<any> | undefined

  getDataFromAPI(page:number){
    this.JSONPlaceholder.getData(page).subscribe((data)=>{
      console.log(data);
      this.data = data;
    })
  }

}
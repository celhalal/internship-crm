import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http:HttpClient) { }

  getData(page: number):Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(url + '?page=' + page);
  }
}

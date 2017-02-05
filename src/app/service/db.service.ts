import { Injectable } from '@angular/core';
import { FormData } from '../form-data';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DbService {

  name: string;
  userPost: string;
  email: string;
	
  constructor (private http: Http) {
	var userDataUrl = "http://jsonplaceholder.typicode.com/users/1";
	var userPostDataUrl = "http://jsonplaceholder.typicode.com/posts?userId=1";
	
    this.http.get(userDataUrl)
	    .map((res:Response) => res.json())
		.subscribe(res => {this.name = res.name; this.email = res.email; });
		
	this.http.get(userPostDataUrl)
	    .map((res:Response) => res.json())
		.subscribe(res => {this.userPost = res[0].body; });
	  
  }

  public getData() {
	 return (new FormData(this.name, this.email, this.userPost));
  }
  
}

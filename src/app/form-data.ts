export class FormData{
	
  name: string;
  email: string;
  post: string;
	
  constructor(nameParam: string, emailParam: string, postParam: string){
	  this.name = nameParam;
	  this.email = emailParam;
	  this.post = postParam;
  }	  
}
import { Component } from '@angular/core';
import { DbService } from '../service/db.service';
import { FormData } from '../form-data';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  formData: FormData = new FormData("", "", "");

  constructor(private formBuilder: FormBuilder, private dbService : DbService) {
	  
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'name': ['', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
		'post': ['', Validators.compose([Validators.required, Validators.minLength(10)])]
      })
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onGetData() {
	this.formData = this.dbService.getData();
    this.myForm = this.formBuilder.group({
      'userData': this.formBuilder.group({
        'name': [this.formData.name, [Validators.required, this.exampleValidator]],
        'email': [this.formData.email, [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
		'post': [this.formData.post, Validators.compose([Validators.required, Validators.minLength(10)])]
      })
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

}

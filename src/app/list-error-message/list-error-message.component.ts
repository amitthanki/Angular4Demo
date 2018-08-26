import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-error-message',
  templateUrl: './list-error-message.component.html',
  styleUrls: ['./list-error-message.component.css']
})
export class ListErrorMessageComponent implements OnInit {

  constructor() { }
  errors:string[] = [];
  ngOnInit() {
  }
    //validation Message for Summary
      generateErrorMessages(formgroup: FormGroup){
        this.errors=[];
      Object.keys(formgroup.controls).forEach(controlName=>{
        let control = formgroup.controls[controlName];
        let error= control.errors;
        controlName = controlName.replace('_',' ')
           for(const propertyName in error){
          this.errors.push(ValidationService.getValidatorErrorMessage(controlName,propertyName,error[propertyName]));
        }
      })
    }
   
}

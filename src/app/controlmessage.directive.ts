import { Component,Input } from '@angular/core';
import { ValidationService } from './validation.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: '[appControlmessage]'  
})
export class ControlmessageDirective {

  @Input() control: FormControl;
  @Input() label: string = '';   
  constructor() { }

  errorMessage() {       
    console.log(this.control);
    if (typeof this.control != 'undefined') {            
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {                    
                return ValidationService.getValidatorErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
            }
        }
    }
    return null;

   }

}

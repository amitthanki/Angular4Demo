import { Component, OnInit, getDebugNode,ViewChild } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import {GridOptions} from "ag-grid";
import {DbService} from './db.service';
import { Customer, arrObj} from './customer';
import {Lookup} from './lookup';
import {Enumeration} from './enumeration.enum';
import { error } from 'protractor';
import { lookup } from 'dns';
import {dummy} from './dummy';
import {filter}from 'lodash';
import { ValidationService } from './validation.service';
import {ListErrorMessageComponent} from './list-error-message/list-error-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers :[DbService,dummy]
})
export class CustomerComponent implements OnInit {
 customer: Customer[];
 objArrayObj : arrObj[]; 
 public lookup: Lookup[]; 
 public lookup1: Lookup[];  
  public Country: any[];
  public Country1: any[];
  public Country2: any[];
  arrayComplex : Array<any> = [];
  errors: string[]=[];
  public Username : string='';  
  complexData : any;
 totalRecords = 0;
 pageSize = 10;
 selected1 : any[] = [];
 constructor(private fb: FormBuilder,private dbservice: DbService,private _ComplexData: dummy
,private _validationservice: ValidationService){
    
  }
  userForm:FormGroup;
  @ViewChild(ListErrorMessageComponent) private _listErrorComponent: ListErrorMessageComponent;

  ngOnInit(){
    this.userForm = this.fb.group({
      name: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      email:['',Validators.required],
      country:['',Validators.required],
      country1:['',Validators.required ],
      country2:['',Validators.required ],
      Shopping_date :['',Validators.compose([Validators.required,ValidationService.dateValidation])],
      selected :[false]
   })
    sessionStorage.setItem('Country2',JSON.stringify(this._ComplexData.getJsonData()))
    sessionStorage.setItem('Country3',JSON.stringify(this._ComplexData.getArray()))
    this.complexData= JSON.stringify(this._ComplexData.getJsonData()[0].batters.batter[0].type);
    this.objArrayObj = this._ComplexData.getArray();  
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];
     
   let a = filter(users, function(o) { return !o.active; });
  
   console.log(JSON.stringify(a));
   // this.BindDropdown();
   this.Country2 =[];
   this.lookup1 = [];
     if(sessionStorage.getItem('Country1') && sessionStorage.getItem("Country24") ==null){
      this.BindDropdown();
      }
    else{
      this.Country = JSON.parse(sessionStorage.getItem('Country1'));
      this.Country1 = JSON.parse(sessionStorage.getItem('Country24'));
      this.Username = this.Country[0].LookupName;
      //alert(this.Username);    
      console.log('session storage called');
    }
   //this.BindDropdown(Enumeration.Gender);
    this.loadData();
  }
  
  loadData(): void{
       this.dbservice.GetData('http://localhost:7267/api/customer').subscribe
       (data=>{this.customer = data,console.log(data)},
        error=><any>error);
    }
    MoveCountry(){
      var a= this.userForm.controls["country1"].value; 
      var strArr = a.toString().split(','); 
      //var coordinates = a.split(',');
      //alert(coordinates);
      for(var u=0;u< strArr.length;u++){
      this.lookup1 =[]; 
      this.lookup1["LookupValue"] = strArr[u];
      let c = this.findElement(this.Country1,"LookupValue",strArr[u]);
      //alert(c);
      this.lookup1["LookupName"] = c["LookupName"];           
      this.Country2.push(this.lookup1);  
      let k = this.Country1.findIndex(z=>z.LookupValue ==strArr[u]);
      this.Country1.splice(k,1);   
     }     
    }

    findElement(arr, propName, propValue) {
      for (var i=0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
        return arr[i];   
      
    } 
    BindDropdown(){
      this.dbservice.GetLookupValue().subscribe(
        data=> {this.lookup = data,console.log(data)
        this.Country = this.lookup.filter(x=>x.LookupType==1),
        this.Country1 = this.lookup.filter(x=>x.LookupType==1),
        sessionStorage.setItem('Country1',JSON.stringify(this.Country))
        sessionStorage.setItem('Country24',JSON.stringify(this.Country1))
      },
        error=><any>error
      );      
    }thisthis
    saveToDB(){
      this.errors =[];
      const form = this.userForm; 
      var d = this.objArrayObj.filter(item => item.Name == "Alfonso");
      //console.log(d);
      this.selected1.forEach(function (obj) {
        return this.objArrayObj.filter(item => item.Name === obj);               
       },(this));
       console.log(this.objArrayObj);  
      
     // this.generateErrorMessages(form);  
    // this._listErrorComponent.generateErrorMessages(form);    
    }
    selectID(name, event:any){
      if(event.currentTarget.checked){
      this.selected1.push(name);
      }
      else{
        let k = this.selected1.indexOf(name); 
        alert(k);       
        this.selected1.splice(k,1);
      }     
      console.log(name);
  }
    reset(){
      this._listErrorComponent.reset(this.userForm);
    }
     
   /* for(const control in form.controls)
      {
      const field = form.get(control);      
      for(const propertyName in field.errors){
        this.errors.push(ValidationService.getValidatorErrorMessage(controlName,propertyName,field.errors[propertyName]));
      }
     
      }*/
    //validation Message for Summary
   /* generateErrorMessages(formgroup: FormGroup){
      Object.keys(formgroup.controls).forEach(controlName=>{
        let control = formgroup.controls[controlName];
        let error= control.errors;
        for(const propertyName in error){
          this.errors.push(ValidationService.getValidatorErrorMessage(controlName,propertyName,error[propertyName]));
        }
      })
    }*/
    getCustomersPage(page: number) {
      this.dbservice.GetData('http://localhost:7267/api/customer').subscribe
      (data=>{this.customer = data,console.log(data)
       this.totalRecords = data.totalRecords},
      error=><any>error);
   }
   //var obj = findObjectByKey(objArray, 'id', 3);
  // var obj = objArray.find(function (obj) { return obj.id === 3; });
   findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
    groupBy(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
          const key = keyGetter(item);
          const collection = map.get(key);
          if (!collection) {
              map.set(key, [item]);
          } else {
              collection.push(item);
          }
      });
      return map;
  }

  private gridoptions: GridOptions;
  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ]

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];


}

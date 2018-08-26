import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {AgGridModule} from "ag-grid-angular";
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component.component';
import { CustomerComponent } from './customer.component';
import { TableModule } from 'primeng/table';
import {DbService} from './db.service';
import { PaginationComponent } from './-shared/pagination/pagination.component';
import { AbcComponent } from './abc.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ValidationService} from './validation.service';
//import {ControlmessageDirective} from './controlmessage.directive';
import {ListErrorMessageComponent} from '../app/list-error-message/list-error-message.component';



@NgModule({
  declarations: [
    TableComponentComponent,
    CustomerComponent,
    PaginationComponent,
    AbcComponent,
    ListErrorMessageComponent
    //ControlmessageDirective
     
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,RouterModule,HttpModule,TableModule,NgxPaginationModule,AgGridModule.withComponents([]),TableModule
  ],
  providers: [DbService,ValidationService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [CustomerComponent]
})
export class AppModule { }

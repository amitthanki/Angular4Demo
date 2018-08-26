import { Injectable } from '@angular/core';
import{ Http, Response, RequestOptions, Headers} from'@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { retry } from 'rxjs/operator/retry';


@Injectable()
export class DbService {

  constructor(private _http:Http) { }
   
     GetData(url:string): Observable<any>{ 
      return this._http.get(url)       
            .map((response: Response) => <any>response.json())    
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
  }

        /*GetLookupValue(Id: number): Observable<any>{
          return this._http.get("http://localhost:7267/api/GetLookupValue/"+ Id)
          .map((response:Response)=> <any>response.json())
          .do(data=> console.log("All:"+ JSON.stringify(data)))
          .catch(this.handleError);
        }*/

   GetLookupValue(): Observable<any>{
    return this._http.get("http://localhost:7267/api/GetLookupValue")
    .map((response:Response)=> <any>response.json())
    .do(data=> console.log("All:"+ JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || 'Server error');
}
  

 /* getVehicles(): Observable<any> {
    const cars = this.http.get(CARS_ENDPOINT).map(res => res.json());
    const bikes = this.http.get(BIKES_ENDPOINT).map(res => res.json());
    
    return Observable.forkJoin([cars, bikes])
       .map(responses => {
          // responses[0] => cars
          // responses[1] => bikes
       });*/
    }

    

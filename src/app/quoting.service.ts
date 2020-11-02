import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userquote} from './userquote';
@Injectable({
  providedIn: 'root'
})
export class QuotingService {

  _url ='';
  constructor(private _http: HttpClient) { }

  quotings(userquote:Userquote){
    return this._http.post<any>(this._url,userquote );
  } 
}

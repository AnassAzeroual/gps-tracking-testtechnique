import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient) { }

getAllPoints()
{
  return this.http.get('http://localhost:3000/gps-data')
}

}

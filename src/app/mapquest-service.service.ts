import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapquestServiceService {

  constructor(private http: HttpClient) { }

  getDirections(from: string, to: string){

    let url: string = 
      `https://www.mapquestapi.com/directions/v2/route?key=jqmMfXZdfwLNjKv4ni1m9MNDUTWSZjFY&from=${from}&to=${to}&format=json`;
  	
    return this.http
               .get(url);
  }
}


